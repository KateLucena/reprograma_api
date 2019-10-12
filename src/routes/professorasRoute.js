const express = require('express')
const router = express.Router()
const controller = require('../controllers/professorasController')

//router.get('/', controller.get)

router.get('/', controller.getSemCPF)
router.get('/:id', controller.getId)

module.exports = router