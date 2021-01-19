/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// init WarpJS
import '@warpjs/engine'
import WarpServer from 'warp-server'
const { sendSms } = new WarpServer()

const form = document.getElementById('form')
const phone = document.getElementById('phone')
const message = document.getElementById('message')
const loading = document.getElementById('loading')
const result = document.getElementById('result')

// on submit form
form.addEventListener('submit', (event) => {
  event.preventDefault()

  loading.style.display = ''
  result.style.display = 'none'

  sendSms(phone.value, message.value)
    .then((data) => {
      // when response, clean form
      phone.value = ''
      message.value = ''
      loading.style.display = 'none'
      result.style.display = ''
      result.innerHTML = 'Message sent!'
    })
    .catch((e) => {
      // show server error
      loading.style.display = 'none'
      result.style.display = ''
      result.innerHTML = 'Error sending... (' + e.message + ')'
    })
})
