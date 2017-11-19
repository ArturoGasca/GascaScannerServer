let { ListDetail } = require('../models')
let { List } = require('../models')
var randomstring = require("randomstring")

function postPriceHolder(req, res, next){
    req.body.code = randomstring.generate({
        length: 12,
        charset: 'ABCDEF0123456789'
    })
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
