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
const getRestaurants = async (latitude, longitude) => {
  'warp +server -client'

  const axios = require('axios')

  // Go to https://api.viamichelin.com/ to get an API key
  const VIAMICHELIN_API_KEY = 'YOUR_API_KEY'

  // Build restAPI call
  const coordinates = `${longitude}:${latitude}`
  const apiUrl =
    'https://secure-apir.viamichelin.com/apir/2/findPoi.json/RESTAURANT/eng?center=' +
    coordinates +
    '&nb=5&dist=10000&source=RESGR&filter=AGG.provider%20eq%20RESGR&charset=UTF-8&ie=UTF-8' +
    '&authKey=' +
    VIAMICHELIN_API_KEY +
    '&callback=cb'

  // custom axios handler for jsonp
  const jsonpHandler = (data, callback) => JSON.parse(data.substring(callback.length + 1, data.length - 1))

  // fetch api
  const { data } = await axios.get(apiUrl, {
    transformResponse: [(data) => jsonpHandler(data, 'cb')]
  })

  const response = data.poiList.map((poi) => {
    const data = poi.datasheets[0]
    return {
      name: data.name,
      description: data.description,
      cooking_lib: data.cooking_lib,
      michelin_stars: data.michelin_stars,
      bib_gourmand: data.bib_gourmand,
      rating: data.rating,
      img: data.medias[0].url_s,
      web: data.web
    }
  })

  return response
}

// on load
if (navigator.geolocation) {
  result.innerHTML = '<h2>⚙️ Get your location...</h2>'
  navigator.geolocation.getCurrentPosition(
    function({ coords }) {
      result.innerHTML = '<h2>⚙️ Calling API...</h2>'
      warper.call(getRestaurants, coords.latitude, coords.longitude).then((list) => {
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
    function() {
      result.innerHTML = '<h2>Error accessing navigator.geolocation</h2>'
    }
  )
} else {
  result.innerHTML = '<h2>Unable to access navigator.geolocation</h2>'
}
