const path = require("path");

const fs = require("fs");

const express = require("express");

const router = express.Router();

const productController = require("../controllers/product");


router.get("/addproduct", productController.getProduct);
router.post("/addproduct", productController.postProduct);

module.exports = router;
