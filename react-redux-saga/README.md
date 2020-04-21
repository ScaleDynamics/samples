# Sample - React Redux Saga with HTTP Node.js proxy

Goal is to show you how to use WarpJS with React, Redux and Redux Saga. This sample displays users by requesting an HTTP Node.js proxy and implements a search.

👉 Try a [live demo](https://warpjs-15oybj8qayvmxe8vhzzhz1cum.storage.googleapis.com/index.html)

## Setup

### Install

- Clone the project
- Go to the `warp-samples/react-redux-saga` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## How it works

First, we implement a WarpJS serverless project in `server` directory.

The `./server/warp.config.js` defines the output for React front-end like a npm module thanks to format [`node-module`](https://warpjs.dev/docs/api/warp-config#output).

```js
// warp.config.js
module.exports = {
  project: 'react-redux-saga',
  output: {
    format: 'node-module',
    projectPath: '..',
    name: 'warp-server',
  },
}
```

The [`warp build`](https://warpjs.dev/docs/api/cli#build) command generates the JavaScript client library directly in the `node_modules` directory of React project. WarpJS find the entry point server thanks `package.json`.main attribute.

So after that, it's very simple to call the serverless function:

- Import [`@warpjs/engine`](https://warpjs.dev/docs/api/engine) in the entry point of React (`./src/index.js`)

```js
import '@warpjs/engine'
```

- Import and call generated function as a npm library thanks to redux-saga (`./src/sagas/users.js`):

```js
import { fetchUsers } from 'warp-server'
...
const result = yield call(fetchUsers, params.criterion)
```

## Resources

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
