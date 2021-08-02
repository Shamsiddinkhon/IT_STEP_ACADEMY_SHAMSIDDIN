const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

let data = null;
fs.readFile(path.join(__dirname, "..", "data", "users.json"), (err, prods) => {
  if (err) throw err;
  data = JSON.parse(prods);
});

router.get("/login", authController.getLogin);

router.post("/login", authController.postLogin);
router.get("/register", authController.getRegister);

router.post("/register", authController.postRegister);

module.exports = router;
