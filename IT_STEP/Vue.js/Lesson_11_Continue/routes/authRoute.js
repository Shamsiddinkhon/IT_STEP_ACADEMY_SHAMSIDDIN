const path = require('path');


const auth = {
  getAuth: (req, res) => {
    const html = path.join(__dirname,'..', 'views',"auth.html");
    res.status(200).sendFile(html);
  },
  postAuth: (req, res) => {
    res.redirect("/cart");
  },
};

module.exports = auth;
