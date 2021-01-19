/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

const axios = require('axios')

const getRestaurants = async (latitude, longitude) => {
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
    transformResponse: [(data) => jsonpHandler(data, 'cb')],
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
      web: data.web,
    }
  })

  return response
}

module.exports = { getRestaurants }
