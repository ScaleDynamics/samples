# Rest API sample - Dark Sky

This sample shows how to use a [Weather Dark Sky REST API](https://darksky.net/dev) using [WarpJS](https://warpjs.com), in particular we are loading weather forecast at a specific location. Feel free to use it as a snippet in your own code.

For more info about the API, refer to https://darksky.net/dev/docs

👉 Try a [live demo](https://warpjs-4iak0pdr14h47qccekgmhybjj.storage.googleapis.com/index.html)

## Setup

### Install

- Clone the project
- Go to the `warp-samples/darksky` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Get your Dark Sky API key

- Open a free account on https://darksky.net/dev, and get your API key
- Open the [`server/index.js`](server/index.js) file
- Update the `DARKSKY_API_KEY` value with yours

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## Resources

- [Dark Sky API](https://darksky.net/dev)
- [Axios library](https://github.com/axios/axios)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev)
