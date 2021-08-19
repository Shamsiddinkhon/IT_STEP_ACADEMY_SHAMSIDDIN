const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mongodb = require("mongodb");
const { Mongoose } = require("mongoose");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";
const mongoClient = new MongoClient(url);

const app = express();
app.set("views", "templates");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

class Database {
    constructor() {
        this._connect()
    }
}
_connect(){
}





let db = null;
let books = null;
mongoClient.connect((err, book) => {
  if (err) throw err;
  db = book.db(dbName);
  books = db.collection("books");
});
app.get("/", (req, res) => {
  res.render("addBook");
});
app.post("/addbook", (req, res) => {
  const { body } = req;
  books.insertOne({ ...body }, (err, result) => {
      console.log(result);
  });
  res.redirect("/");
});
app.get("/search", (req, res) => {
  res.render("search", {});
});
app.post("/search", (req, res) => {
  const { body } = req;
  books.find({ title: body.title }).forEach((book) => {
    console.log(book);
  });
  res.redirect("/search");
});

app.use("*", (req, res) => {
  res.status(404).render("page404");
});
app.listen(3000);
