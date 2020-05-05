/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// init WarpJS
import '@warpjs/engine'
import WarpServer from 'warp-server'
const { classify } = new WarpServer()

// on submit form
document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault()
  result.innerHTML = '<h2>Remote inference running</h2>'
  const text = classifyNewTextInput.value

  // call warp function
  const toxic = await classify([text])

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
