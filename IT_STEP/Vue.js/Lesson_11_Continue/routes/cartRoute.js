const path = require('path')


const cart = {
    getCart:(req, res) => {
        const html = path.join(__dirname,'..', 'views', "cart.html");
        res.status(200).sendFile(html);
      }
}

module.exports = cart