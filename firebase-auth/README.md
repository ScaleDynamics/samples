# Sample - Firebase authentication

Use Firebase authentication on browser and control rights as server side.

Sample is based on [MongoDB Movies](../mongodb-movies)

Idea is to add Firebase Authentication on client side and check that user is connected as server side.

## Setup

### Install

- Clone the project
- Go to the `warp-samples/firebase-auth` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Firebase Config

- Go to https://console.firebase.google.com/u/0/?hl=en and add project

#### Configure Firebase Authentication

You need to create web application and configure Firebase Authentication

- Create web application by clicking on icon `</>`
- in `src/index.js` replace by yours:

```js
const firebaseConfig = 'YOUR FIREBASE CONFIG HERE'
```

- in `Authentication` menu, select `Sign-in method` tab and enabled Google sign-in provider.

#### Configure Firebase Admin

In order to check tha user is connected as server side, you have to used `firebase-admin` framework.

- Go to `Project Setting` and select `Service accounts` tab.
- Generate new private key
- Copy file in `server` directory of sample and rename it to `firebase-admin-config.json`

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

After deploying, you have to add your domain to secure your application.

- Go to firebase console
- in `Authentication` menu, select `Sign-in method` tab and enabled Google sign-in provider.
- Click on add domain button and add your WarpJS domain `warpjs-???.storage.googleapis.com`

You can find your domain in terminal after to execute `npm run deploy` or go to
[Starbase console](starbase.warpjs.com) and copy Deployment URL on your project.

## How it works

First, we implement a WarpJS serverless project in `server` directory.

The `./server/warp.config.js` defines the output for front-end like a npm module thanks to format [`node-module`](https://warpjs.dev/docs/api/warp-config#output).

```js
// warp.config.js
module.exports = {
  project: 'firebase-authentication',
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
const movies = await getMovies(idToken)
```

## Resources

- [Firebase](https://firebase.google.com/?hl=fr)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [MongoDB driver for Node.js](https://www.npmjs.com/package/mongodb)
- [Sample Mflix Dataset from MongoDB Atlas](https://docs.atlas.mongodb.com/sample-data/sample-mflix/)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
