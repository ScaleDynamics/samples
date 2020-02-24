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
const getPosition = async (latitude, longitude) => {
  'warp +server -client'

  const axios = require('axios')

  // Go to https://opencagedata.com/api to get an API key
  const OPENCAGE_API_KEY = 'YOUR_API_KEY'

  const coordinates = `${latitude},${longitude}`
  const restAPI = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${encodeURIComponent(coordinates)}&pretty=1&no_annotations=1`
  const { data } = await axios.get(restAPI)

  const position = data.results[0].formatted
  return position
}

// on load
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(pos) {
      result.innerHTML = '<h2>⚙️ Calling API...</h2>'
      warper.call(getPosition, pos.coords.latitude, pos.coords.longitude).then(position => {
        result.innerHTML = `
          <h2>My position is</h2>
          <div>${position}</div>
        `
      })
    },
    function() {
      result.innerHTML = '<h2>Error accessing navigator.geolocation</h2>'
    }
  )
} else {
  result.innerHTML = '<h2>Unable to access navigator.geolocation</h2>'
}
