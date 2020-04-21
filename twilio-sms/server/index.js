/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

const twilio = require('twilio')

const sendSms = async (phone, message) => {
  // init twilio account
  const accountSid = 'TWILIO ACCOUNT SID'
  const authToken = 'TWILIO AUTH TOKEN'
  const emitter = 'TWILIO PHONE EMITTER'

  try {
    const client = new twilio(accountSid, authToken)
    const result = await client.messages.create({
      body: message,
      from: emitter,
      to: phone
    })
    return result.body
  } catch (err) {
    if (err.status === 400) {
      // catch twilio bad request error
      throw new Error(err.message)
    }
    throw new Error('Internal Server Error')
  }
}

module.exports = { sendSms }