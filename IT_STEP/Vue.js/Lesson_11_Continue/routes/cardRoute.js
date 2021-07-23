const path = require("path");

const card = {
  card: (req, res) => {
    // res.redirect('/')
      
    res.status(200).sendFile(path.join(__dirname, "..", "views", "cart.html"));
  },
};
module.exports = card;
