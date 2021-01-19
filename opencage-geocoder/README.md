# Rest API sample - OpenCage Geocoder

This sample shows how to use the [OpenCage Geocoder REST API](https://opencagedata.com/api) and the [ScaleDynamics WarpJS SDK](https://scaledynamics.com/), in particular we are using the API to get the physical address at a specific GPS location.

For more info about the API, refer to https://opencagedata.com/api

👉 Try a [live demo](https://sample-opencage-geocoder.scaledynamics.cloud)

## Setup

### Install

- Clone the project
- Go to the `warp-samples/opencage-geocoder` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
$ npx warp login
```

### Get your Opencage Geocode API key

- Open a free account on https://opencagedata.com, and get your API key
- Open the [`server/index.js`](server/index.js) file
- Update the `OPENCAGE_API_KEY` value with yours

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

## Resources

- [OpenCage Geocoder API](https://opencagedata.com/api)
- [Axios](https://github.com/axios/axios)
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
