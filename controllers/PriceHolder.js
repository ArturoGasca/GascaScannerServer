let { PriceHolder } = require('../models')

function postPriceHolder(req, res, next){
  PriceHolder.bulkCreate(req.body)
  .then( priceHolder => {
    res.status(201).send("Success")
  })
  .catch(next)
}

module.exports = {
  postPriceHolder
}
