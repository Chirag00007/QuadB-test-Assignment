const { createCategory, getCategories, createColor, getColors } = require("../controllers/categoryAndColorController");

const express = require("express");
const router = express.Router();

router.post("/createCategory", createCategory);
router.get("/getCategories", getCategories);
router.post("/createColors", createColor);
router.get("/getColors", getColors);

module.exports = router;