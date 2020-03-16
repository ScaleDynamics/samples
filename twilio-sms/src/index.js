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
const sendSms = async (phone, message) => {
  'warp +server -client'

  const twilio = require('twilio')

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

const form = document.getElementById('form')
const phone = document.getElementById('phone')
const message = document.getElementById('message')
const loading = document.getElementById('loading')

// on submit form
form.addEventListener('submit',
  async event => {
    event.preventDefault()

    try {
      loading.style.display = ''
      const result = await warper.call(sendSms, phone.value, message.value)
      // when response, clean form
      phone.value = ''
      message.value = ''
      loading.style.display = 'none'
      alert(result)
    } catch (e) {
      // display server error
      loading.style.display = 'none'
      alert(e.message)
    }

  })
