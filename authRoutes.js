// routes/authRoutes.js
import express from "express";
import { signup, login } from "../controllers/authController.js"; // ✅ ESM import

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
router.post("/signup", signup);

// @route   POST /api/auth/login
// @desc    Login a user
router.post("/login", login);

export default router; // ✅ Correct export
