// routes/userRoutes.js
import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserAccount,
} from "../controllers/userController.js"; // ✅ ESM import

const router = express.Router();

// @route   GET /api/users/:id
// @desc    Get user profile by ID
router.get("/:id", getUserProfile);

// @route   PUT /api/users/:id
// @desc    Update user profile
router.put("/:id", updateUserProfile);

// @route   DELETE /api/users/:id
// @desc    Delete user account
router.delete("/:id", deleteUserAccount);

export default router; // ✅ Correct export
