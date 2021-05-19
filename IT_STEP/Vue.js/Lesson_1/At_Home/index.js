const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("home");
  });
  app.get("/services", (req, res) => {
    res.render("services");
  });
  app.get("/contacts", (req, res) => {
    res.render("contacts");
  });

app.get("*", (req, res) => {
    res.send("Not found 404")
})
app.listen(8080, () => {
    console.log("Server is running on port 3000");
  });
  