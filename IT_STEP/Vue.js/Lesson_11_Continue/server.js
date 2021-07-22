const path = require("path");

const express = require("express");
const app = express();

const authHandlers = require("./routes/authRoute");
const cartHandlers = require("./routes/cartRoute");
const productHandlers = require("./routes/productRoute");
const rootHandlers = require("./routes/rootRoute");
const aboutHandlers = require("./routes/aboutRoute");

// console.log(authHandlers);

app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   console.log("I am 1st middleware");
//   next();
// });
app.use("/cart", cartHandlers.getCart);
app.use("/product", productHandlers.getProduct);
app.get("/auth", authHandlers.getAuth);
app.post("/auth", authHandlers.postAuth);
app.get("/about", aboutHandlers.getAbout);
app.use("/", rootHandlers.getRoot);

app.listen(3000);
