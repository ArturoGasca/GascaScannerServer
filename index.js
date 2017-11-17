let express = require('express')
let bodyParser = require('body-parser')

let app = express()

let items = require('./routes/Product')
let priceHolder = require('./routes/PriceHolder.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', items)
app.use('/priceholders', priceHolder)

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(501).send(err)
});

module.exports = app
