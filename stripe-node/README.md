# Demo Stripe

Make a payment with [Stripe](https://stripe.com) Node.js module and [WarpJS](https://warpjs.com).

## Setup

### Install

- Clone the project
- Go to the `warp-samples/stripe-node` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Setup your Stripe account

1. Create an account on Stripe (see https://dashboard.stripe.com/register)

2. Open the [`server/index.js`](server/index.js) file

3. Update the `STRIPE_TEST_API_KEY` value with yours

```js
const stripe = require('stripe')('sk_test....')`
```

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## Resources

- [Stripe Node.js](https://www.npmjs.com/package/stripe)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev)
