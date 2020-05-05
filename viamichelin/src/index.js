/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// init WarpJS
import '@warpjs/engine'
import WarpServer from 'warp-server'
const { getRestaurants } = new WarpServer()

// on load
if (navigator.geolocation) {
  result.innerHTML = '<h2>⚙️ Get your location...</h2>'
  navigator.geolocation.getCurrentPosition(
    function ({ coords }) {
      result.innerHTML = '<h2>⚙️ Calling API...</h2>'
      getRestaurants(coords.latitude, coords.longitude).then((list) => {
        result.innerHTML = `
            <h2>List of best restaurants at 10 km near you</h2>
            <div style="overflow-x:auto;">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th></th>
                    <th>Type</th>
                    <th>Etoiles</th>
                    <th>Gourmand</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  ${list
                    .map(
                      (item) => `
                        <tr>
                          <td><a href="https://${item.web}" target="_blank">${item.name}</a></td>
                          <td>${item.description}</td>
                          <td><img src="${item.img}" alt=="${item.name}"></td>
                          <td>${item.cooking_lib}</td>
                          <td>${item.michelin_stars}</td>
                          <td>${item.bib_gourmand}</td>
                          <td>${item.rating} / 20</td>
                        </tr>
                      `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>`
      })
    },
    function () {
      result.innerHTML = '<h2>Error accessing navigator.geolocation</h2>'
    }
  )
} else {
  result.innerHTML = '<h2>Unable to access navigator.geolocation</h2>'
}
