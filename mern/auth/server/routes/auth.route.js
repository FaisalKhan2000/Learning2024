import express from "express";
import {
  checkAuth,
  forgetPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";
// import { verifyToken } from "../middleware/verifyToken.js";
import { authenticateJwt } from "../config/passport.js";

const router = express.Router();

router.get("/check-auth", authenticateJwt, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
