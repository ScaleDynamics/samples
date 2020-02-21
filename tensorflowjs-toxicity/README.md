# Sample - TensorFlow.js Toxicity

Execute the [toxicity model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) for [TensorFlow.js](https://www.tensorflow.org/js) on [WarpJS](https://warpjs.com).

The toxicity model detects whether text contains toxic content such as threatening language, insults, obscenities, identity-based hate, or sexually explicit language.

## Try it

Live demo: https://warpjs-744h4bixx1x93pg3oxc3hr4cf.storage.googleapis.com/index.html

## Setup

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
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Toxicity model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
- [Getting started with WarpJS](https://warpjs.dev/docs/getting-started)
- [WarpJS Documentation](https://warpjs.dev/)
