const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const comments = [
  {
    id: 1,
    username: "John",
    comment: "Hello my names is John",
  },
  {
    id: 2,
    username: "Shams",
    comment: "Hello my names is John",
  },
  {
    id: 3,
    username: "Mike",
    comment: "Hello my names is John",
  },
  {
    id: 4,
    username: "Sam",
    comment: "Hello my names is John",
  },
  {
    id: 5,
    username: "Hi",
    comment: "Hello my names is John",
  },
];
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/comments123", (req, res) => {
  res.render("comments/comments", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new", { comments });
});


//getting new comment
app.post("/comments", (req, res) => {
  //   console.log(req.body);
  const { username, comment, id = comments.length + 1 } = req.body;
  comments.push({ username, comment, id });
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
