const express = require('express')
const router = express.Router()
const imageController = require('../controller/imageController')

router.get('/get', imageController.getAll)
router.get('/get/:id', imageController.getOne)
router.post('/insert', imageController.insert)
router.delete('/delete/:id', imageController.delete)
router.get('/count', imageController.count)

module.exports = router