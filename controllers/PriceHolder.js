let { ListDetail } = require('../models')
let { List } = require('../models')

function postPriceHolder(req, res, next){
  List.create(req.body, {
    include: [{
      model: ListDetail,
      as: 'details'
    }]
  })
  .then(result => {
    res.status(201).send("Success")
  })
  .catch(next)
}

module.exports = {
  postPriceHolder
}
