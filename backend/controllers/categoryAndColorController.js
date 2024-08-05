const Category = require("../models/Category");
const Color = require("../models/Color");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}; 


exports.createColor = async (req, res) => {
  try {
    const { name } = req.body;
    const color = new Color({ name });
    await color.save();
    res.status(201).json(color);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.json(colors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};