const { SendMailService } = require('../services/send-mail.service')

const { postMailService } = SendMailService

/*
 * call other imported services, or same service but different functions here if you need to
*/
const postMail = async (req, res, next) => {
  const contactData = req.body
  try {
    var resp = null;
    await postMailService(contactData).then((mailRes)=>{
      resp = mailRes;
    }).catch((err)=>{
      resp = err;
    })
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()

    console.log(resp);
    switch (resp.StatusCode) {
      case 200:
        res.status(200).send(resp)
        break;
      case 503:
        res.status(503).send(resp)
        break;
      default:
        res.sendStatus(500)
        break;
    }
    next()
  } catch (e) {
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
