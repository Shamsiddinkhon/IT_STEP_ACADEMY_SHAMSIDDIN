const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

let data = null;

fs.readFile(
  path.join(__dirname, "..", "data", "products.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);

router.get("/", (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "data", "products.json"),
    (err, prods) => {
      if (err) throw err;
      data = JSON.parse(prods);
      res.render("index", { products: data });
    }
  );
}),
  router.get("/:id", (req, res) => {
    const { id } = req.params;
    const products = data.find((prod) => prod.id === id);
    console.log(products);
    res.render("product", { products });
  });

module.exports = router;
