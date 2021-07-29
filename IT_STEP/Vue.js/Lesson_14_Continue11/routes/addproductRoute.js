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
  res.render("addproduct");
});
router.post("/addproduct", (req, res) => {
  // console.log(req.body);
  const { body } = req;
  for (let prod in data) {
    if (body.title === prod.title) throw new Error("The item already added");
  }
 
  fs.writeFile(
    path.join(__dirname, "..", "data", "products.json"),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;
      console.log("The File added");
    }
  );
  res.redirect("/products");
});

module.exports = router;
