const User = require("../models/User");

exports.getLogin = (req, res) => {
    res.render('login')
}

exports.postLogin = (req, res) => {
  for (let user of data) {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      res.redirect("/cart");
    }
  }
  res.redirect("/auth/login");
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = (req, res) => {
  const { body } = req;
  new User(body.username, body.password, body.fullName).register(body);
  res.end();
};
