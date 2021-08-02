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

router.get("/addproduct", (req, res) => {
  const { id } = req.params;
  const productlist = data.find((c) => c.id === id);
  res.render("addproduct", { productlist });
});
router.post("/addproduct", (req, res) => {
  let { title, description, imgUrl, price , qty, id = data.length } = req.body;
  data.push({ title, description, imgUrl, price , qty, id });
  fs.writeFileSync(
    path.join(__dirname, "..", 'data', "products.json"),
    JSON.stringify(data, null, 2)
    );
    console.log(data);
  res.redirect("/products");
});

module.exports = router;
