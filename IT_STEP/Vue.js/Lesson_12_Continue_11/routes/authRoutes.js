const path = require("path");
const fs = require("fs");

const express = require("express");
const router = express.Router();

let data = null;

fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, users) => {
  if (err) throw err;
  data = JSON.parse(users);
});

router.get("/login", (req, res) => {
  res.render("auth");
});

router.post("/login", (req, res) => {
  for (let user of data) {
    if (user.username === req.body.username) {
      if (user.password === req.body.password) {
        res.redirect("/card");
      }
    }
  }
  res.redirect("/auth/login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { body } = req;

  if (body.password !== body["password-repeat"])
    throw new Error("Password not match!");
  console.log(data);
  for (let user of data) {
    if (user.username === body.username)
    throw new Error("Profile whith such username already exists! ");
  }
  
  delete body['password-repeat']
  delete body.agree
  
  data.push(body);
  fs.writeFileSync(
    path.join(__dirname, "..", "data", "users.json"),
    JSON.stringify(data),
    () => {
      console.log("User successfully registrated");
    }
    );
    res.end()
});

module.exports = router;
