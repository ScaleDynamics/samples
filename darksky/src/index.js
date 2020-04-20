/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS
import '@warpjs/engine'
import { getForecast } from 'warp-server'

const result = document.getElementById('result')

// on load
result.innerHTML = '<h2>⚙️ Calling API...</h2>'
getForecast(48.1305054, -1.6232634).then((forecast) => {
  result.innerHTML = `
    <h2>Weather for WarpJS office location</h2>
    <img src="https://darksky.net/images/weather-icons/${forecast.icon}.png" alt="${forecast.icon}" width="126" height="126" />
    <p>${forecast.summary}</p>
  `
})
