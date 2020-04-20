# Sample - Facebook authentication

Use Facebook Login SDK on browser and control rights as server side.

Idea is to add Facebook Login on client side and check that the user is connected as server side.

## Setup

### Install

- Clone the project
- Go to the `warp-samples/facebook-auth` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Facebook Config

1. You need to create a Facebook App in the [Developers Console](https://developers.facebook.com/) and add Facebook Login on it.

2. Open the [`src/index.js`](src/index.js) file

3. Update the `FACEBOOK_APP_ID` value with yours

```js
// initialize Facebook SDK
window.fbAsyncInit = () => {
  FB.init({
    appId: 'FACEBOOK_APP_ID',
    version: 'v6.0',
    cookie: true,
    status: true,
    xfbml: true
  })
```

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

After deploying, you have to add your domain to secure your application.

1. Go to [Developers Console](https://developers.facebook.com/) and open your application details

2. In Facebook Login tab, open settings

3. Add Your WarpJS url (warpjs-???.storage.googleapis.com) in `Valid OAuth Redirect URIs` field.

## How it works

First, we implement a WarpJS serverless project in `server` directory.

The `./server/warp.config.js` defines the output for front-end like a npm module thanks to format [`node-module`](https://warpjs.dev/docs/api/warp-config#output).

```js
// warp.config.js
module.exports = {
  project: 'facebook-authentication',
  output: {
    format: 'node-module',
    projectPath: '.',
    name: 'warp-server',
  },
}
```

The [`warp build`](https://warpjs.dev/docs/api/cli#build) command generates the JavaScript client library directly in the `node_modules` directory of front-end project. WarpJS find the entry point server thanks `package.json`.main attribute.

So after that, it's very simple to call the serverless function:

- Import [`@warpjs/engine`](https://warpjs.dev/docs/api/engine) in the entry point of React (`./src/index.js`)

```js
import '@warpjs/engine'
```

- Import and call generated function as a npm library (`./src/index.js`):

```js
import { getMovies } from 'warp-server'
...
const data = await getMovies(accessToken)
```

## Resources

- [Facebook Developers](https://developers.facebook.com/)
- [Node Fetch](https://www.npmjs.com/package/node-fetch)
- [MongoDB driver for Node.js](https://www.npmjs.com/package/mongodb)
- [Sample Mflix Dataset from MongoDB Atlas](https://docs.atlas.mongodb.com/sample-data/sample-mflix/)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
