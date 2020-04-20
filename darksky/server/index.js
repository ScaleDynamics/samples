/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

const axios = require('axios')

// Go to https://darksky.net/dev to get an API key
const DARKSKY_API_KEY = 'YOUR_API_KEY'

/**
 * Get the forecast weather for a location
 *
 * @param {number} latitude
 * @param {number} longitude
 */
const getForecast = async (latitude, longitude) => {
  const coordinates = `${latitude},${longitude}`
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${encodeURIComponent(coordinates)}`
  const { data } = await axios.get(url)

  return {
    summary: data.hourly.summary,
    icon: data.hourly.icon,
  }
}

module.exports = { getForecast }
