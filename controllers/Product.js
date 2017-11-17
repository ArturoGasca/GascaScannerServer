let { Product, Barcode } = require('../models')

function getItem(req, res, next){
  Product.findById(
  req.params.id,
  {
    include: [{
      model: Barcode,
      as: 'details',
      required: true,
      attributes: ['description']
    }]
  })
  .then(item => {
    if (item){
      let newItem = {}
      var keys = Object.keys(item.details);
      for(var i=0;i<keys.length;i++){
          var key = keys[i];
          newItem[key] = item.details[key]
      }
      

      var keys = Object.keys(item);
      for(var i=0;i<keys.length;i++){
          var key = keys[i];
          newItem[key] = item[key]
      }
      res.status(201).json(newItem)
    }else{
      res.status(404).json("Barcode not found")
    }

  })
  .catch(next)
}

module.exports = {
  getItem
}
