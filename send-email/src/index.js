/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

const Joi = require('joi')
const nodemailer = require('nodemailer')

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  message: Joi.string().required(),
})

const sendEmail = async (name, email, message) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  })

  try {
    // check that inputs are correct
    await schema.validateAsync({ name, email, message })

    // send email
    const result = await transporter.sendMail({
      from: testAccount.user,
      to: [testAccount.user],
      cc: [email],
      subject: `Contact us - Request from ${name}`,
      html: `
        <h1>Contact us - Request from ${name}</h1>
        <p>
          <strong>Name:</strong>
          <span>${name}</span>
        </p>
        <p>
          <strong>Email:</strong>
          <span>${email}</span>
        </p>
        <p>
          <strong>Message:</strong>
          <span>${message}</span>
        </p>
      `,
    })

    // Preview only available when sending through an Ethereal account
    const previewUrl = nodemailer.getTestMessageUrl(result)
    console.log('Preview URL:', previewUrl )
    return previewUrl
  } catch (err) {
    console.log('[server error]\n', err)
    // return specific error on client
    if (err.name === 'ValidationError') {
      // return Joi error message
      throw new Error(err.message)
    }
    // default error
    throw new Error('Internal Server Error')
  }
}

module.exports = { sendEmail }
