# Rest API sample - Dark Sky

This sample shows how to use a [Weather Dark Sky REST API](https://darksky.net/dev) using [ScaleDynamics WarpJS SDK](https://scaledynamics.com/), in particular we are loading weather forecast at a specific location.

For more info about the API, refer to https://darksky.net/dev/docs

👉 Try a [live demo](https://sample-darksky.scaledynamics.cloud)

## Setup

### Install

- Clone the project
- Go to the `warp-samples/darksky` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
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
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
