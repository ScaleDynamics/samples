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

export const fetchUsers = (criterion) => warper.call((criterion) => {
  // warp directive
  'warp +server -client'
  const { fetchUsers } = require('./server/')

  return fetchUsers(criterion)
}, criterion)
