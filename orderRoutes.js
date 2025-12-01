// routes/orderRoutes.js
import express from "express";
import { placeOrder, trackOrder, getUserOrders } from "../controllers/orderController.js"; // ✅ ESM import

const router = express.Router();

// @route   POST /api/orders
// @desc    Place a new order
router.post("/", placeOrder);

// @route   GET /api/orders/:id
// @desc    Track an order by ID
router.get("/:id", trackOrder);

// @route   GET /api/orders/user
// @desc    Get all orders for the logged-in user
router.get("/user/my-orders", getUserOrders);

export default router; // ✅ Correct export
