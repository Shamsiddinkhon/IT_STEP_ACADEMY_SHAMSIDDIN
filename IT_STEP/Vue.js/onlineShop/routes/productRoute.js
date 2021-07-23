const path = require('path')


const product = {
    getProduct:(req, res) => {
        const html = path.join(__dirname,'..', 'views',"product.html");
        res.status(200).sendFile(html);
      }
}

module.exports = product