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
  constructor(imgUrl, title, price, description, itemId) {
    this.imgUrl = imgUrl;
    this.title = title;
    this.price = price;
    this.description = description;
    this.itemId = itemId;
  }
  add(bd) {
    const { title, description, imgUrl, price, qty, itemId = uuid() } = bd;
    data.push({
      title,
      description,
      imgUrl,
      price,
      qty: Number(bd.qty),
      itemId,
    });
    fs.writeFileSync(
      path.join(__dirname, "..", "data", "products.json"),
      JSON.stringify(data, null, 2)
    );
    console.log(data);
  }
};
