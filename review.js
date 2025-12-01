// models/review.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // The product being reviewed
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // The customer who wrote the review
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5, // Star rating between 1–5
    },
    comment: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000, // Limit comment length
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
