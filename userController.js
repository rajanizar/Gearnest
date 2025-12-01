// controllers/userController.js
import User from "../models/user.js"; // ✅ ESM import
import bcrypt from "bcryptjs";

// ========================
// GET User Profile
// ========================
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ========================
// UPDATE User Profile
// ========================
export const updateUserProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let updatedData = {};
    if (name) updatedData.name = name;
    if (email) updatedData.email = email;

    // Hash new password if provided
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData, {
      new: true,
    }).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ========================
// DELETE User Account
// ========================
export const deleteUserAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete Account Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
