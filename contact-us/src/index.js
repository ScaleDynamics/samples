/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS
import { defaultWarper as warper } from '@warpjs/warp'
import engine from '@warpjs/engine'

// init WarpJS
engine.init()

// warp function
const sendEmail = async (name, email, message) => {
  'warp +server -client'

  const Joi = require('@hapi/joi')
  const nodemailer = require('nodemailer')

  // init nodemailer with gmail account
  const user = 'ENTER YOUR GMAIL EMAIL ADDRESS'
  const pass = 'ENTER YOUR GMAIL PASSWORD'

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  })

  // check that format is correct
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    message: Joi.string().required()
  })
  // manage error 
  try {
    await schema.validateAsync({ name, email, message })

    // send email
    await transporter.sendMail({
      from: user,
      to: [user],
      subject: `contact-us - ${name}`,
      html: `
        <div>
          <strong>Name: </strong>
          <span>${name}</span>
        </div>
        <div>
          <strong>Email: </strong>
          <span>${email}</span>
        </div>
        <div>
          <strong>Message: </strong>
          <span>${message}</span>
        </div>
      `
    })
  } catch (err) {
    // return specific error on client
    if (err.name === 'ValidationError') {
      // return Joi error message
      throw new Error(err.message)
    }
    // default error
    throw new Error('Internal Server Error')
  }
}

new Vue({
  el: '#contact-form',
  data: {
    form: {
      name: '',
      email: '',
      message: ''
    },
    isSending: false
  },
  methods: {
    clearForm() {
      for (const field in this.form) {
        this.form[field] = ''
      }
    },
    async onSubmit(e) {
      e.preventDefault()
      this.isSending = true

      try {
        await warper.call(sendEmail, this.form.name, this.form.email, this.form.message)
        // when response, clean form
        this.clearForm()
        this.isSending = false
      } catch (e) {
        // display server error
        this.isSending = false
        alert(e.message)
      }
    }
  }
})
