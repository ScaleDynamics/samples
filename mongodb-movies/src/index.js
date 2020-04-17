/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

const MongoClient = require('mongodb').MongoClient

const MONGODB_URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/'

// warp function
const fetchMovies = async (search) => {
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

module.exports = { fetchMovies }
