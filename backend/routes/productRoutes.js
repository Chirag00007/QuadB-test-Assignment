const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductByCategoryAndPrice,
  getProductById,
} = require("../controllers/productController");
const { protect, admin } = require("../middlewares/authMiddleware");
const upload = require("../utils/multer");

const router = express.Router();

router.post(
  "/create",
  protect,
  admin,

  upload.array("images"), 
  createProduct
);

router.get("/getAllProducts", getAllProducts);
router.get("/getProductByCategoryAndPrice", getProductByCategoryAndPrice);
router.get("/getProducts/:id", getProductById);

module.exports = router;
