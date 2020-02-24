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
const getForecast = async (latitude, longitude) => {
  'warp +server -client'

  const axios = require('axios')

  // Go to https://darksky.net/dev to get an API key
  const DARKSKY_API_KEY = 'YOUR_API_KEY'

  const coordinates = `${latitude},${longitude}`
  const restAPI = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${encodeURIComponent(coordinates)}?extend=hourly`
  const { data } = await axios.get(restAPI)

  return data.daily.summary
}

// on load
result.innerHTML = '<h2>⚙️ Calling API...</h2>'
warper.call(getForecast, 48.1305054, -1.6232634).then(prevision => {
  result.innerHTML = `
    <h2>Forecast prevision for WarpJS home address</h2>
    <div>${prevision}</div>
  `
})
