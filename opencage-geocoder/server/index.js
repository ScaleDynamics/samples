/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

const axios = require('axios')

// Go to https://opencagedata.com/api to get an API key
const OPENCAGE_API_KEY = 'YOUR_API_KEY'

/**
 * Get the address by reverse geocoding of coordinates
 *
 * @param {number} latitude
 * @param {number} longitude
 */
const getPosition = async (latitude, longitude) => {
  const coordinates = `${latitude},${longitude}`
  const url = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGE_API_KEY}&q=${encodeURIComponent(
    coordinates
  )}&pretty=1&no_annotations=1`
  const { data } = await axios.get(url)

  const position = data.results[0].formatted

  return position
}

module.exports = { getPosition }
