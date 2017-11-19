let { Product } = require('../models')

function getItem(req, res, next){
  Product.findById(req.params.id)
  .then(item => {
    if (item){
      res.status(201).json(item)
    }else{
      res.status(404).json("Barcode not found")
    }

  })
  .catch(next)
}

module.exports = {
  getItem
}
