// controllers/productController.js
import Product from "../models/product.js";

// ========================
// CREATE Product
// ========================
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, brand, stock } = req.body;

    // Handle image upload (via multer)
    let imagePath = "";
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const product = new Product({
      name,
      price,
      description,
      category,
      brand,
      stock,
      image: imagePath,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// ========================
// GET All Products
// ========================
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// ========================
// GET Product by ID
// ========================
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

// ========================
// UPDATE Product
// ========================
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, brand, stock } = req.body;

    let imagePath = req.body.image;
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category, brand, stock, image: imagePath },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Update Product Error:", error);
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// ========================
// DELETE Product
// ========================
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};
