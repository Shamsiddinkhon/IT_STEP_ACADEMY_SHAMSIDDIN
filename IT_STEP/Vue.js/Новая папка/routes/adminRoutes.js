const fs = require('fs')
const path = require('path')

const express = require('express')

const router = express.Router()


let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'products.json'), (err, prods) => {
    if(err) throw err
    data = JSON.parse(prods)
})

router.get('/add-product', (req, res) => {
    res.render('add-product')
})

router.post('/add-product', (req, res) => {
    data.push(req.body)
    fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(data, null, 2), (err) => {
        if(err) throw err
    })
    res.redirect('/')
})


module.exports = router