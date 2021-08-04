const path = require("path");
const fs = require("fs");

const Product = require("../models/Product");

const p = path.join(__dirname, "..", "data", "products.json");

let data = null;
fs.readFile(p, (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

exports.getProduct = (req, res) => {
  const { id } = req.params;
  const productlist = data.find((c) => c.id === id);
  res.render("addproduct", { productlist });
};
exports.postProduct = (req, res) => {
  const { body } = req;

  new Product(
    body.title,
    body.description,
    body.imgUrl,
    body.price,
    body.qty,
    body.id
  ).add();

  res.redirect("/");
};
