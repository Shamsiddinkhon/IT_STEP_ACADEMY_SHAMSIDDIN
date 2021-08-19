const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const url = "mongodb://127.0.0.1:27017";
const dbName = "test";

const db = require('Database')



app.listen(3000);