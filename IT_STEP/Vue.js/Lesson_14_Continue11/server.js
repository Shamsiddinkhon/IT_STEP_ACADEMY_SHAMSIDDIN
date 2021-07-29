const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const authRouters = require("./routes/authRoutes");
const cardHandlers = require("./routes/cardRoute");
const page404Handlers = require("./routes/page404Route");
const aboutHandlers = require("./routes/aboutRoute");
const homeHandlers = require("./routes/homeRoute");
const addproductHandlers = require("./routes/addproductRoute");

const productHandlers = require("./routes/productRoute");
const productsHandlers = require("./routes/productsRoute");

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouters);
app.use("/card", cardHandlers.card);

app.use("/product", productHandlers.product);
app.use("/products", productsHandlers.products);
app.use(addproductHandlers);
app.post(addproductHandlers);

app.use("/about", aboutHandlers.about);
app.post( homeHandlers);
app.use( homeHandlers);




app.use('*',(req, res) => {
    res.status(404).render('page404')
})
// app.use(page404Handlers.page404);
app.listen(3000);
