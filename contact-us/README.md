# Sample - Contact-us with Vue.js

Create a simple contact-us form in [Vue.js](https://vuejs.org/) and send e-mail with Node.js thanks to [WarpJS](https://warpjs.com).

## Setup

### install

- Clone the project
- Go to the `warp-samples/contact-us` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Gmail Account Config

This sample uses [Nodemailer](https://www.npmjs.com/package/nodemailer) module with a Gmail account.

- Open the [`src/index.js`](src/index.js) file
- Replace these keys by your personal data:

```js
// init nodemailer with gmail account
const user = 'ENTER YOUR GMAIL EMAIL ADDRESS'
const pass = 'ENTER YOUR GMAIL PASSWORD'
```

Do not worry, WarpJS removes these keys in client side thanks to [directive](https://warpjs.dev/docs/api/directives).

**Not working**:

- Before sending your email using gmail, you have to allow non secure apps to access gmail.
  You can do this by going to your gmail settings [here](https://myaccount.google.com/lesssecureapps).
- You can disable captcha at https://accounts.google.com/b/0/DisplayUnlockCaptcha

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## Resources

- [Vue.js](https://vuejs.org/)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Joi](https://www.npmjs.com/package/@hapi/joi)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
