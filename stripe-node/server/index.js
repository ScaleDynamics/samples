/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

const stripe = require('stripe')('STRIPE_TEST_API_KEY')

const chargeService = function (email, amount, currency) {
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
    .catch((err) => {
      throw new Error('Internal server error');
    })
}

module.exports = { chargeService }
