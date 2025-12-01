// models/product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter a product description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price"],
      min: 0,
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock quantity"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
    },
    image: {
      type: String, // URL or path to image file
      required: [true, "Please upload a product image"],
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Connects product to a vendor
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
