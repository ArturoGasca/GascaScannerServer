let express = require('express')
let router = express.Router()
let ItemController = require('../controllers/Product')

router.get("/:id", ItemController.getItem)

module.exports = router
