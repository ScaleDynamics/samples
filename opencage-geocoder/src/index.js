/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// init WarpJS
import '@warpjs/engine'
import WarpServer from 'warp-server'
const { getPosition } = new WarpServer()

const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', function (event) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      // success
      function (pos) {
        result.innerHTML = '<h2>⚙️ Calling API...</h2>'
        getPosition(pos.coords.latitude, pos.coords.longitude).then((position) => {
          result.innerHTML = `
            <h2>Your are near this place:</h2>
            <div>${position}</div>
          `
        })
      },
      // error
      function () {
        result.innerHTML = '<h2>Error accessing navigator.geolocation</h2>'
      }
    )
  } else {
    // error
    result.innerHTML = '<h2>Unable to access navigator.geolocation</h2>'
  }
})
