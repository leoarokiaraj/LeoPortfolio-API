const express = require('express')
const { SendMailController } = require('../controllers/send-mail.controller')

const router = express.Router()

router.get('/sendmail', SendMailController.postMail)

module.exports = router
