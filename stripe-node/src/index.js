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
const chargeService = function (email, amount, currency) {
  'warp +server -client'

  const stripe = require('stripe')('STRIPE_TEST_API_KEY')

  return stripe.customers
    .create({ email })
    .then(customer =>
      // create new customer
      stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      })
    )
    .then(({ customer }) =>
      // create new charge on customer
      stripe.charges.create({
        amount: amount * 100,
        currency,
        customer
      })
    )
    // and return the receipt url
    .then(charge => charge.receipt_url)
}

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
  warper.call(chargeService, email, amount, currency)
    .then(receiptUrl => div.innerHTML = `<p>🧾 <a href="${receiptUrl}" target="_blank">See the receipt</a></p>`
    )
    .catch(e => div.innerHTML = `<div class="error">${e ? e.message : 'internal server error, please check your Stripe Api Key'}</div>`)
}
