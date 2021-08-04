const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "data", "users.json");

let data = null;
fs.readFile(p, (err, users) => {
  if (err) throw err;
  data = JSON.parse(users);
});

module.exports = class User {
  constructor(username, password, fullName) {
    this.username = username;
    this.password = password;
    this.fullName = fullName;
  }

  register(bd) {
    if (bd.password !== bd["password-repeat"])
      throw new Error("Passwords do not match!");

    for (let user of data) {
      if (user.username === bd.username) {
        console.log(user, bd);
        throw new Error("Profile with such username already exists!");
      }
    }
    delete bd["password-repeat"];
    delete bd.agree;
    data.push(bd);
    fs.writeFile(p, JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log("User successfully registered!");
    });
  }
};
