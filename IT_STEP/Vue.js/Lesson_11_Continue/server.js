const path = require("path");


const express = require("express");

const bodyParser = require('body-parser')

const authHandlers = require("./routes/authRoute");
const cardHandlers = require("./routes/cardRoute");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const productHandlers = require("./routes/productRoute");
const productsHandlers = require("./routes/productsRoute");
const app = express();

app.set('views', 'templates')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, "public")));
app.get("/auth", authHandlers.getAuth);
app.post("/auth", authHandlers.postAuth);
app.use("/card", cardHandlers.card);
app.use("/product", productHandlers.product);
app.use("/products", productsHandlers.products);
app.use("/about", aboutHandlers.about);
app.post("/learnmore", homeHandlers.postlearnmore);
app.use(homeHandlers.home);

app.listen(3000);
