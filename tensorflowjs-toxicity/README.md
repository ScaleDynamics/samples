# Sample - TensorFlow.js Toxicity

Execute the [toxicity model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) for [TensorFlow.js](https://www.tensorflow.org/js) with the [ScaleDynamics WarpJS SDK](https://scaledynamics.com/).

The toxicity model detects whether text contains toxic content such as threatening language, insults, obscenities, identity-based hate, or sexually explicit language.

👉 Try a [live demo](https://sample-tensorflowjs-toxicity.scaledynamics.cloud)

## Setup

- Clone the project
- Go to the `warp-samples/tensorflowjs-toxicity` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
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

## Resources

- [TensorFlow.js](https://www.tensorflow.org/js)
- [Toxicity Model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
