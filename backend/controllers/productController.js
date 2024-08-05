const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");


exports.createProduct = async (req, res) => {
 
  try {
    const {
      name,
      description,
      price,
      discountPercentage,
      discountPrice,
      dimensions,
      sku,
      categoryIds,
      colorIds,
      additionalInfo,
      packaging,
      weight,
    } = req.body;
    

    let images = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "quadb_products",
        });
        images.push(result.secure_url);
      }
    }

    const product = new Product({
      name,
      description,
      price,
      discountPercentage,
      discountPrice,
      dimensions,
      sku,
      categories: JSON.parse(categoryIds),
      colors: JSON.parse(colorIds),
      images,
      additionalInfo,
      packaging,
      weight,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
}

exports.getProductByCategoryAndPrice = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    let filters = {};

    if (category && mongoose.Types.ObjectId.isValid(category)) {
      filters.categories = category;
    }

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.$gte = parseFloat(minPrice);
      if (maxPrice) filters.price.$lte = parseFloat(maxPrice);
    }

    const products = await Product.find(filters);
    res.status(200).json(products);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
}

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error });
  }
}