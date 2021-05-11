const express = require("express");
const app = express();

app.set("view engine", "ejs");

// EJS
app.get("/", (req, res) => {
    res.render("home")
  });

  app.get("/random", (req, res) => {
      const num = Math.floor(Math.random() * 20) + 1
      res.render("random", {num})
  })




// // GET express
// app.get("/", (req, res) => {
//   console.log("Get Working");
//   res.send("home Dir");
// });

// app.get("/cats", (req, res) => {
//   res.send("andres cats");
// });
// app.get("/dogs", (req, res) => {
//   res.send("andres dogs");
// });
// app.get("/dogs/get", (req, res) => {
//   res.send("andres dogs get");
// });
// // app.get("/dogs/:id", (req, res) => {
// //     console.log(req.params);
// //     res.send("Route with ID working")
// // })
// app.get("/r/:postTag", (req, res) => {
//   const { postTag } = req.params;
//   res.send(`<h1>Zdes budut posti o ${postTag}</h1>`);
// });

// // For Input search express
// app.get("/search", (req, res) => {
//   const { q, color } = req.query;
//   res.send(`<h1>Zdes ishem q ${q} - ${color}</h1>`);
// });

// // app.get("*", (req, res) => {
// //     res.send("Not found 404")
// // })
// // POST express
// app.post("/cats", (req, res) => {
//   res.send("post request got");
// });
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
