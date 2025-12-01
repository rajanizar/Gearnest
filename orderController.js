// controllers/orderController.js
import Order from "../models/order.js";   // ✅ Import order model (make sure filename is lowercase)
import Product from "../models/product.js";

// ========================
// PLACE Order
// ========================
export const placeOrder = async (req, res) => {
  try {
    const { products, shippingAddress, paymentMethod } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products in order" });
    }

    // Calculate total price
    let totalAmount = 0;
    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.productId}` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for ${product.name}` });
      }
      totalAmount += product.price * item.quantity;
    }

    // Create new order
    const newOrder = new Order({
      user: req.user.id, // ✅ Comes from authMiddleware
      products,
      shippingAddress,
      paymentMethod,
      totalAmount,
      status: "Pending",
      placedAt: new Date(),
    });

    await newOrder.save();

    // Reduce product stock
    for (const item of products) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Place Order Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ========================
// TRACK Order by ID
// ========================
export const trackOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products.productId", "name price image")
      .populate("user", "name email");

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    console.error("Track Order Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ========================
// GET User's Orders
// ========================
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate("products.productId", "name price image");

    res.status(200).json(orders);
  } catch (error) {
    console.error("Get User Orders Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
