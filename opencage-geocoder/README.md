# Rest API sample - OpenCage Geocoder

This sample shows how to use [OpenCage Geocoder REST API](https://opencagedata.com/api) using [WarpJS](https://warpjs.com), in particular we are using the API to get the physical address at a specific GPS location. Feel free to use it as a snippet in your own code.

For more info about the API, refer to https://opencagedata.com/api

## Try it

See [live demo](https://warpjs-79ryxehtax4k9lzjl1kpntv4y.storage.googleapis.com/index.html)

## Setup

### Get your Opencage Geocode API key

- Open a free account on https://opencagedata.com, and get your API key
- Open the [`src/index.js`](src/index.js) file
- Update the `OPENCAGE_API_KEY` value by your API key

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
- [OpenCage Geocoder API](https://opencagedata.com/api)
- [Axios library](https://github.com/axios/axios)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
