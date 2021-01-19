# Sample - Twilio SMS

Send an SMS with [Twilio](https://www.twilio.com/) and the [ScaleDynamics WarpJS SDK](https://scaledynamics.com/).

👉 Try a [live demo](https://sample-twilio-sms.scaledynamics.cloud/)

## Setup

### Install

- Clone the project
- Go to the `warp-samples/twilio-sms` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
$ npx warp login
```

### Twilio Config

- Create an account on Twilio (see https://www.twilio.com/try-twilio)
- Create incoming phone number (https://www.twilio.com/console/phone-numbers/getting-started) and add it as emitter variable.
- Open the [`server/index.js`](server/index.js) file
- Replace these keys by your Project info on Twilio console (see https://www.twilio.com/console)

```js
// init twilio account
const accountSid = 'TWILIO ACCOUNT SID'
const authToken = 'TWILIO AUTH TOKEN'
const emitter = 'TWILIO PHONE EMITTER'
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

- [Twilio Documentation](https://www.twilio.com/docs/api)
- [Twilio npm module](https://www.npmjs.com/package/twilio)
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
