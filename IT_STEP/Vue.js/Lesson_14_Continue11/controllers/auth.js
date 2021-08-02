const User = require("../models/User");

exports.postRegister = (req, res) => {
  for (let user of data) {
    if (user.username === req.body.username) {
      if (user.password === req.body.password) {
        res.redirect("/card");
      }
    }
  }
  res.redirect("/auth/login");
};
exports.getLogin = (req, res) => {
  res.render("login");
};
exports.getRegister = (req, res) => {
    res.render("register");
  };

exports.postUser = (req, res) => {
  const { body } = req;
  let user = new User(body.username, body.password, body.fullName);
  user.register(body);
  res.redirect("/auth/login");
  res.end();
};
