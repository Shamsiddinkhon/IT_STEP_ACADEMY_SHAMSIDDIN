const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const p = path.join(__dirname, "..", "data", "users.json");

let data = null;
fs.readFile(p, (err, users) => {
  if (err) throw err;
  data = JSON.parse(users);
});

module.exports = class User {
  constructor(username, name, lastName, email, password, phone, country) {
    this.username = username;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.country = country;
  }

  register(bd) {
    if (bd.password !== bd["password-repeat"])
      throw new Error("Passwords do not match");
    for (let user of data) {
      if (user.username === bd.username)
        throw new Error("Profile such username already exist");
    }
    delete bd["password-repeat"];
    delete bd["agree"];
    const {
      username,
      name,
      lastName,
      email,
      password,
      phone,
      country,
      userId = uuid(),
    } = bd;
    data.push({
      username,
      name,
      lastName,
      email,
      password,
      phone: Number(bd.phone),
      country,
      userId,
    });

    fs.writeFileSync(
      path.join(__dirname, "..", "data", "users.json"),
      JSON.stringify(data, null, 2),
      () => {
        console.log("user successfully registered");
      }
    );
  }
};
