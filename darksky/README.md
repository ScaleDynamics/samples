# Rest API sample - Dark Sky

This sample shows how to use a [Weather Dark Sky REST API](https://darksky.net/dev) using [WarpJS](https://warpjs.com), in particular we are loading weather forecast at a specific location. Feel free to use it as a snippet in your own code.

For more info about the API, refer to https://darksky.net/dev/docs

## Try it

See [live demo](https://warpjs-4iak0pdr14h47qccekgmhybjj.storage.googleapis.com/index.html)

## Setup

### Get your Dark Sky API key

- Open a free account on https://darksky.net/dev, and get your API key
- Open the [`src/index.js`](src/index.js) file
- Update the `DARKSKY_API_KEY` value by your API key

### WarpJS Config

- Open an account on [starbase.warpjs.com](https://starbase.warpjs.com) to get access to WarpJS
- Get your `User ID` and a `Project name` ("demo" by default) from the [WarpJS Console](https://starbase.warpjs.com)
- Rename the `.env.example` file to `.env` and copy your keys inside it

## Run

```bash
# install deps
$ npm install

# run on localhost
$ npm start

# build and deploy to production
$ npm run build
$ npm run deploy
```
 
## Resources
- [Dark Sky API](https://darksky.net/dev)
- [Axios library](https://github.com/axios/axios)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
