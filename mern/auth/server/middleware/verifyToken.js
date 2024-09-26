import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import { UNAUTHORIZED } from "../constants/http.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    next(new AppError(UNAUTHORIZED, "Unauthorized - no token provided"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      next(new AppError(UNAUTHORIZED, "Unauthorized - invalid token"));
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};
