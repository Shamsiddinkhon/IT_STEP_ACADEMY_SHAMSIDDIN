const express = require("express");
const app = express();

app.get('/services/:postTag', (req, res) => {
    const { postTag } = req.params
    res.send(`<h1>Info about Services</h1>`)
})
app.post('/contacts/:postTag', (req, res) => {
    const { postTag } = req.params
    res.send(`Info about method Post`)
})
app.get('/contacts/:postTag', (req, res) => {
    const { postTag } = req.params
    res.send(`<h1>Info about ${postTag}</h1>`)
})

app.get("/blogs/:category/:postId", (req, res) => {
    const {category, postId} =req.params
    console.log(req.params);
    res.send(`Blogs ${category} ID=${postId}`)
})
app.get('*', (req, res) => {
    res.send("Not found 404")
})

app.listen(8080, () => {
    console.log("Server is running on port 3000");
})
