const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "data", "users.json");

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

module.exports = class User {
  constructor(username, password, fullName) {
    this.username = username;
    this.password = password;
    this.fullName = fullName;
  }


  postRegister(bd) {
    if (bd.password !== bd["password-repeat"])
      throw new Error("Passwords do not match");
    for (let user of data) {
      if (user.username === bd.username)
        throw new Error("Profile such username already exist");
    }
    delete bd["password-repeat"];
    delete bd["agree"];
    const { userId = data.length, username, password, fullname } = bd;
    data.push({ username, password, fullname, userId });

    fs.writeFileSync(
      path.join(__dirname, "..", "data", "users.json"),
      JSON.stringify(data, null, 2),
      () => {
        console.log("user successfully registered");
      }
    );
  }
};
