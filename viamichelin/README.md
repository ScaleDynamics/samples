# Rest API sample - ViaMichelin

This sample shows how to use a [ViaMichelin REST API](https://api.viamichelin.com/services/api-rest/) using [WarpJS](https://warpjs.com). This API is for tailor-made journey calculations, with unique Michelin content services. In this sample we will use this API to indicate the best restaurants at 10 km of the current location. Feel free to use it as a snippet in your own code.

For more info about the API, refer to https://api.viamichelin.com/

## Setup

### Install

- Clone the project
- Go to the `warp-samples/viamichelin` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to warpjs
$ npx warp login
```

### Get your ViaMichelin API key

- Open a free account on https://api.viamichelin.com, and get your API key
- Open the [`src/index.js`](src/index.js) file
- Update the `VIAMICHELIN_API_KEY` value with yours

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## Resources

- [ViaMichelin API](https://api.viamichelin.com/)
- [Axios library](https://github.com/axios/axios)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev)
