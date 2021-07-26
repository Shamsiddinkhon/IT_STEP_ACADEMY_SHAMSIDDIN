const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const authHandlers = require("./routes/authRoutes");
const cardHandlers = require("./routes/cardRoute");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const productHandlers = require("./routes/productRoute");
const productsHandlers = require("./routes/productsRoute");
const authRoutes = require('./routes/authRoutes')
const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRoutes);

app.use("/card", cardHandlers.card);
app.use("/product", productHandlers.product);
app.use("/products", productsHandlers.products);
app.use("/about", aboutHandlers.about);
app.post("/learnmore", homeHandlers.postlearnmore);
app.use(homeHandlers.home);
app.listen(3000);
