const path = require("path");
const fs = require("fs");

const User = require("../models/User");

const p = path.join(__dirname, "..", "data", "users.json");

exports.getLogin = (req, res) => {
  res.render("login");
};
let data = null;
fs.readFile(p, (err, users) => {
  if (err) throw err;
  data = JSON.parse(users);
});
exports.postLogin = (req, res) => {
  // console.log(req.body);
  for (let user of data) {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      res.redirect("/card");
    }
  }
  res.redirect("/auth/login");
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = (req, res) => {
  const { body } = req;
  new User(
    body.username,
    body.name,
    body.lastName,
    body.email,
    body.password,
    body.phone,
    body.country
  ).register(body);
  res.redirect("/auth/login");
};
