const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const p = path.join(__dirname, "..", "data", "products.json");

let data = null;
fs.readFile(p, (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

module.exports = class Product {
  constructor(imgUrl, title, price,qty, description) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.price = price;
    this.qty = +Number(qty)
    this.description = description;
    this.id = uuid();
  }
  add() {
    data.push(this);
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "products.json"),
      JSON.stringify(data, null, 2)
    );
  }
};
