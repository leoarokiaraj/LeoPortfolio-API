const { SendMailService } = require('../services/send-mail.service')

const { postMailService } = SendMailService

/*
 * call other imported services, or same service but different functions here if you need to
*/
const postMail = async (req, res, next) => {
  const contactData = req.body
  try {
    var resp = await postMailService(contactData)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.status(200).send(resp)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

SendMailController = {
  postMail
}

module.exports = {
  SendMailController
}
