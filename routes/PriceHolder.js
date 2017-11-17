let express = require('express')
let router = express.Router()
let PriceHolder = require('../controllers/PriceHolder')

router.post("/", PriceHolder.postPriceHolder)

module.exports = router
