const path = require("path");

const about = {
  getAbout: (req, res) => {
    const html = path.join(__dirname, "..", "views", "about.html");
    res.status(200).sendFile(html);
  },
};

module.exports = about;
