const express = require("express");
const app = express();

const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const contents = [
  {
    id: uuid(),
    title: "John",
    content: "Hello my names is John",
  },
  {
    id: uuid(),
    title: "Shams",
    content: "Hello my names is John",
  },
  {
    id: uuid(),
    title: "Mike",
    content: "Hello my names is John",
  },
  {
    id: uuid(),
    title: "Sam",
    content: "Hello my names is John",
  },
  {
    id: uuid(),
    title: "Hi",
    content: "Hello my names is John",
  },
];
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/bloks", (req, res) => {
  res.render("bloks/bloks", { contents });
});
app.get("/bloks/new", (req, res) => {
  res.render("bloks/new", { contents });
});
// Getting ID
app.get("/bloks/:id", (req, res) => {
  console.log(req.params);
  // perevodim stoku na chislo
  const { id } = req.params;
  console.log(id);
  const content = contents.find((c) => c.id === id);
  console.log(content);
  res.render("bloks/show", { content });
});
//getting new comment
app.post("/bloks", (req, res) => {
  //   console.log(req.body);
  const { title, content, id = uuid()} = req.body;
  contents.push({ title, content, id });
  res.redirect("/bloks");
});


app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
