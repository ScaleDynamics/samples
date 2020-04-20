/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */
'use strict'

import '@warpjs/engine'
import { chargeService } from 'warp-server'

// dynamic form
const div = document.getElementById('result')
const email = document.getElementById('email')
const amount = document.getElementById('amount')
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault()
  const currency = document.querySelector('input[name="currency"]:checked').value
  charge(email.value, amount.value, currency)
})

const charge = function (email, amount, currency) {
  div.innerHTML = '<p>⚙️ loading...</p>'
  // Call function in Warp
  chargeService(email, amount, currency)
    .then(receiptUrl => div.innerHTML = `<p>🧾 <a href="${receiptUrl}" target="_blank">See the receipt</a></p>`)
    .catch(e => div.innerHTML = `<div class="error">${e.message}</div>`)
}
