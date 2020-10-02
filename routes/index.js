const express = require('express')
const { SendMailController } = require('../controllers/send-mail.controller')

const router = express.Router()

router.post('/sendmail', SendMailController.postMail)

module.exports = router
