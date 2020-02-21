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
toxicity.load(threshold).then(model => {
  global.model = model
  modelLoaded = true
})

// Force to waiting the async initialization of the TensorFlow model.
// The "deasync" lib turns async function into sync via JS wrapper of Node event loop.
// The "loopWhile" function will wait the condition resolution to continue.
require('deasync').loopWhile(() => !modelLoaded)
