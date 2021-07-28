const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
let data = null;

fs.readFile(
  path.join(__dirname, "..", "data", "products.json"),
  (err, prods) => {
    if (err) throw err;
    data = JSON.parse(prods);
  }
);
const addproduct = {
  addproduct: (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(id);
    const productlist = data.find((c) => c.id === id);
    // console.log(productlist);
    res.render("addproduct", { productlist });
  },
  postaddproduct: (req, res) => {
    // const { body } = req;
    const { id = uuid(), title, description, imgUrl, price } = req.body;
    data.push({ id, title, description, imgUrl, price });
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "products.json"),
      JSON.stringify(data)
    );
    res.redirect("/");
  },
};
module.exports = addproduct;
