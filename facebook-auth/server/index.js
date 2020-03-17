/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

const MongoClient = require('mongodb').MongoClient
const fetch = require('node-fetch')

const MONGODB_URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/'

/**
 * return list of movies from Mongo Database with search criterion
 * @param {string} search search criterion
 */
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

/**
 * Check that user is logged. Client sent the facebook access token
 * and server verify that token is valid
 * @param {string} accessToken Facebook access token
 */
const checkUser = (accessToken) => {
  const userForbiddenError = new Error('User not found!')
  if (!accessToken) {
    throw userForbiddenError
  }
  return fetch(`https://graph.facebook.com/me?access_token=${accessToken}`)
    .then(res => res.json())
    .then(json => {
      if (json && json.error) {
        throw userForbiddenError
      }
      return json
    })
    .catch((e) => {
      throw userForbiddenError
    })
}

module.exports = {
  checkUser,
  fetchMovies
}
