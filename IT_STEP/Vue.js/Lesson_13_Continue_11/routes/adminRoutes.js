const path = require("path");
const fs = require("fs");

const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res) => {
    res.render('add-product')
})

module.exports = router

