# Rest API sample - ViaMichelin

This sample shows how to use a [ViaMichelin REST API](https://api.viamichelin.com/services/api-rest/) with the [ScaleDynamics WarpJS SDK](https://scaledynamics.com/). This API is for tailor-made journey calculations, with unique Michelin content services. In this sample we will use this API to indicate the best restaurants at 10 km of the current location.

For more info about the API, refer to https://api.viamichelin.com/

## Setup

### Install

- Clone the project
- Go to the `warp-samples/viamichelin` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
$ npx warp login
```

### Get your ViaMichelin API key

- Open a free account on https://api.viamichelin.com, and get your API key
- Open the [`server/index.js`](server/index.js) file
- Update the `YOUR_API_KEY` value with yours

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
- [Axios](https://github.com/axios/axios)
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
