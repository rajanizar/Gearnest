// routes/productRoutes.js
import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"; // ✅ ESM import

const router = express.Router();

// @route   POST /api/products
// @desc    Create a new product
router.post("/", createProduct);

// @route   GET /api/products
// @desc    Get all products
router.get("/", getProducts);

// @route   GET /api/products/:id
// @desc    Get product by ID
router.get("/:id", getProductById);

// @route   PUT /api/products/:id
// @desc    Update product by ID
router.put("/:id", updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete product by ID
router.delete("/:id", deleteProduct);

export default router; // ✅ Correct export
