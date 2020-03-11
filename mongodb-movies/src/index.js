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
const fetchMovies = async (search) => {
  'warp +server -client'

  const MongoClient = require('mongodb').MongoClient

  const MONGODB_URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/'

  let mongoClient
  try {
    // open a database connection
    mongoClient = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    throw new Error(`Database connection failed (${error.message})`)
  }

  // query the database
  return mongoClient
    .db('sample_mflix')
    .collection('movies')
    .find({ poster: { $exists: true }, title: { $regex: search, $options: 'i' } })
    .project({ _id: 0, title: 1, year: 1, plot: 1, poster: 1 })
    .sort({ year: -1 })
    .limit(50)
    .toArray()
}

// on submit form
document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault()

  const result = document.getElementById('result')
  const search = document.getElementById('search')

  result.innerHTML = '⚙️ searching...'

  // warp call
  const movies = await warper.call(fetchMovies, search.value)

  // render result
  if (movies && movies.length) {
    result.innerHTML = `
      <ul>
        ${movies
          .map(
            (movie) => `
          <li>
            <h2>${movie.title} (${movie.year})</h2>
            <img src="${movie.poster}" width="100"/>
            <p>${movie.plot}</p>
          </li>
        `
          )
          .join('')}
      </ul>`
  } else {
    result.innerHTML = `no results found for "${search.value}"`
  }
})
