/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')

const toxicity = require('@tensorflow-models/toxicity')

// The minimum prediction confidence
const threshold = 0.9

// Load the model
let modelLoaded = false
let model = null
toxicity.load(threshold).then((tsModel) => {
  model = tsModel
  modelLoaded = true
})

// Force to waiting the async initialization of the TensorFlow model.
// The "deasync" lib turns async function into sync via JS wrapper of Node event loop.
// The "loopWhile" function will wait the condition resolution to continue.
require('deasync').loopWhile(() => !modelLoaded)

// warp function
const classify = async (inputs) => {
  // predict with tensorflow model
  const predictions = await model.classify(inputs)

  // check toxicity results
  //
  // `predictions` is an array of objects, one for each prediction head,
  // that contains the raw probabilities for each input along with the
  // final prediction in `match` (either `true` or `false`).
  // If neither prediction exceeds the threshold, `match` is `null`.
  const toxic = predictions.some(({ results }) => results[0].match !== false)

  return toxic
}

module.exports = { classify }