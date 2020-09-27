/*
  * if you need to make calls to additional tables, data stores (Redis, for example),
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
const postMailService = async (user, content) => {
  try {
    return { data: 'Success',
              code: 200,
            testVal: process.env.KEY}
  } catch(e) {
    throw new Error(e.message)
  }
}

SendMailService = {
  postMailService
}

module.exports = {
  SendMailService
}
