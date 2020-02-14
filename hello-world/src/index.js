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
const hello = (name) => {
  // warp directive
  'warp +server -client'

  return `Hello ${name} from Node.js ${process.version} 👋`
}

// on load, call function with WarpJS
warper.call(hello, 'World').then(response => {
  result.innerHTML += response
})
