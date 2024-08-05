const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number },
    discountPrice: { type: Number },
    dimensions: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    colors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Color" }],
    images: [{ type: String }],
    additionalInfo: { type: String },
    packaging: { type: String },
    weight: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
