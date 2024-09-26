import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { BAD_REQUEST, OK } from "../constants/http.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mailtrap/emails.js";
import { User } from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import catchErrors from "../utils/catchErrors.js";
import { generateTokeAndSetCookie } from "../utils/generateTokeAndSetCookie.js";
import {
  forgetPasswordSchema,
  loginSchema,
  resetPasswordSchema,
  signupSchema,
  verifyEmailSchema,
} from "../validation/auth.validation.js";

export const signup = catchErrors(async (req, res) => {
  const data = signupSchema.parse(req.body);

  const userAlreadyExists = await User.findOne({ email: data.email });

  if (userAlreadyExists) {
    throw new AppError(BAD_REQUEST, "User already exists");
  }

  // Hash password
  const hashPassword = await bcryptjs.hash(data.password, 10);

  // Generate verification token
  const verificationToken = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  const user = await User.create({
    ...data,
    password: hashPassword,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
  });

  // Generate JWT token and set it in cookies
  generateTokeAndSetCookie(res, user._id);

  // Send verification email
  await sendVerificationEmail(user.email, verificationToken);

  // Respond with success
  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

export const verifyEmail = catchErrors(async (req, res) => {
  const data = verifyEmailSchema.parse(req.body);

  const user = await User.findOne({
    verificationToken: data.code,
    verificationTokenExpiresAt: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    throw new AppError(BAD_REQUEST, "Invalid or expired verification code");
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;
  await user.save();

  // Send welcome email
  await sendWelcomeEmail(user.email, user.firstName);

  // Respond with success
  res.status(200).json({
    success: true,
    message: "Email verified successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

export const login = catchErrors(async (req, res) => {
  const data = loginSchema.parse(req.body);

  const user = await User.findOne({ email: data.email });

  if (!user) {
    throw new AppError(BAD_REQUEST, "Invalid credentials");
  }

  const isPasswordValid = await bcryptjs.compare(data.password, user.password);

  if (!isPasswordValid) {
    throw new AppError(BAD_REQUEST, "Invalid credentials");
  }

  // Set the token and cookie before sending the response
  generateTokeAndSetCookie(res, user._id);

  user.lastLogin = new Date();

  // Only send the response after the token has been set
  res.status(OK).json({
    success: true,
    message: "Logged in successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

export const forgetPassword = catchErrors(async (req, res) => {
  const { email } = forgetPasswordSchema.parse(req.body);

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(BAD_REQUEST, "User not found");
  }

  // Generate reset token and set expiry (1 hour from now)
  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiresAt = resetTokenExpiresAt;

  await user.save();

  // Send reset password email
  await sendPasswordResetEmail(
    user.email,
    `${process.env.CLIENT_URL}/reset-password/${resetToken}`
  );

  res
    .status(OK)
    .json({ success: true, message: "Password reset link sent to your email" });
});

export const resetPassword = catchErrors(async (req, res, next) => {
  const { token } = req.params;

  const { password } = resetPasswordSchema.parse(req.body);

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpiresAt: { $gt: Date.now() },
  });

  if (!user) {
    next(new AppError(BAD_REQUEST, "Invalid or expired reset token"));
  }

  // update password
  const hashedPassword = await bcryptjs.hash(password, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpiresAt = undefined;
  await user.save();

  // send reset password success email
  await sendResetSuccessEmail(user.email);

  res.status(OK).json({ success: true, message: "Password reset successful" });
});

export const logout = catchErrors(async (req, res) => {
  res.clearCookie("token");
  res.status(OK).json({ success: true, message: "Logged out successfully" });
});

export const checkAuth = catchErrors(async (req, res, next) => {
  // Access the user directly from req.user
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    return next(new AppError(BAD_REQUEST, "User not found"));
  }

  res.status(200).json({ success: true, user });
});
