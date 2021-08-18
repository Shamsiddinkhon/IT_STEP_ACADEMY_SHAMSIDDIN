const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const mongoClient = new MongoClient(url);

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let db = null;
let users = null
mongoClient.connect((err, user) => {
  if (err) throw err;
  db = user.db(dbName);
  users = db.collection("users");
});


app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.post("/add-user", (req, res) => {
  const { body } = req;
  console.log(body);
  users.insertOne({ ...body }, (err, result) => {
    console.log(result);
  });
  res.redirect("/");
});
app.use("*", (req, res) => {
  res.status(404);
});
app.listen(3000);
