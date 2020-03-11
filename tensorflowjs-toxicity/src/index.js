/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS
import { defaultWarper as warper } from '@warpjs/warp'
import engine from '@warpjs/engine'

// init WarpJS
engine.init()

// warp function
const classify = async (inputs) => {
  'warp +server -client'

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

// on submit form
document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault()
  result.innerHTML = '<h2>Remote inference running</h2>'
  const text = classifyNewTextInput.value

  // warp call
  const toxic = await warper.call(classify, [text])

  // render result
  if (toxic) {
    result.innerHTML = `
      <h2 style="color:red">Your sentence is TOXIC :(</h2>
      <img src="/img/Pdown.png" alt="">
    `
  } else {
    result.innerHTML = `
      <h2 style="color:green">Your sentence is NON TOXIC :)</h2>
      <img src="/img/Pup.png" alt="">
    `
  }
})
