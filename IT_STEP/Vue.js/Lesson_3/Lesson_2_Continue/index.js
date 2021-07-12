const express = require("express");
const app = express();

const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const comments = [
  {
    id: uuid(),
    username: "John",
    comment: "Hello my names is John",
  },
  {
    id: uuid(),
    username: "Shams",
    comment: "Hello my names is John",
  },
  {
    id: uuid(),
    username: "Mike",
    comment: "Hello my names is John",
  },
  {
    id: uuid(),
    username: "Sam",
    comment: "Hello my names is John",
  },
  {
    id: uuid(),
    username: "Hi",
    comment: "Hello my names is John",
  },
];
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/comments", (req, res) => {
  res.render("comments/comments", { comments });
});
app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});
// Getting ID
app.get("/comments/:id", (req, res) => {
  console.log(req.params);
  // perevodim stoku na chislo
  const { id } = req.params;
  console.log(id);
  const comment = comments.find((c) => c.id === id);
  console.log(comment);
  res.render("comments/show", { comment });
});
//getting new comment
app.post("/comments", (req, res) => {
  //   console.log(req.body);
  const { username, comment, id = uuid()} = req.body;
  comments.push({ username, comment, id });
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  
});
