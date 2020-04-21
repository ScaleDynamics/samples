/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

import '@warpjs/engine'
import { sendSms } from 'warp-server'

const form = document.getElementById('form')
const phone = document.getElementById('phone')
const message = document.getElementById('message')
const loading = document.getElementById('loading')

// on submit form
form.addEventListener('submit', event => {
  event.preventDefault()

  loading.style.display = ''
  sendSms(phone.value, message.value)
    .then((result) => {
      // when response, clean form
      phone.value = ''
      message.value = ''
      loading.style.display = 'none'
      alert(result)
    })
    .catch((e) => {
      // display server error
      loading.style.display = 'none'
      alert(e.message)
    })
})
