const nodemailer = require('nodemailer');
const { decrypt } = require('../utilities/decrypt.util')
/*
 * if you need to make calls to additional tables, data stores (Redis, for example),
 * or call an external endpoint as part of creating the blogpost, add them to this service
 */
const postMailService = async (contactData) => {
  try {

    var transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.C + "@gmail.com",
        pass: decrypt({
          iv: process.env.A,
          content: process.env.B
        })
      }
    });

    const message = {
      from: 'leoarokiaraj1@gmail.com', // Sender address
      to: 'leoarokiaraj1@gmail.com', // List of recipients
      subject: 'A ping from Leo Portfolio', // Subject line
      text: 'Hello Leo, \n \t My name is ' + contactData.name + ' and my email address is ' + contactData.email_id +
        ' and I would like to discuss about ' + contactData.content + '. \n\n Thanks and regards, \n ' + contactData.name // Plain text body
    };

  return new Promise((res, rej) => {
      transport.sendMail(message, function(err, info) {
        if (err) {
          rej( {
            StatusCode: 503,
            Status: 'Failure'
          })
        } else {
          res( {
            StatusCode: 200,
            Status: 'Success'
          })
        }
      });
    })

  } catch (e) {
    throw new Error(e.message)
  }
}

SendMailService = {
  postMailService
}

module.exports = {
  SendMailService
}
