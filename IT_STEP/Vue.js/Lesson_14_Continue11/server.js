const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const authRouters = require("./routes/authRoutes");
const aboutHandlers = require("./routes/aboutRoute");
const shopHandlers = require("./routes/shopRoutes");
const addproductHandlers = require("./routes/adminRoutes");
const productsHandlers = require("./routes/productsRoute");

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouters);

app.use("/products", productsHandlers.products);
app.use(addproductHandlers);
app.post(addproductHandlers);

app.use("/about", aboutHandlers.about);
app.use( shopHandlers);




app.use('*',(req, res) => {
    res.status(404).render('page404')
})
app.listen(3000);
