/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */
const MongoClient = require('mongodb').MongoClient
const firebaseAdmin = require('firebase-admin')

const MONGODB_URI = 'mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/'

// initialize firebase admin
const serviceAccount = require('../firebase-admin-config.json')

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount)
})

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
 * Check that user is logged. Client sent the firebase user token
 * and server verify that token is valid
 * @param {string} idToken Firebase user token
 */
const checkUser = async (idToken) => {
  const userForbiddenError = new Error('User not found!')
  if (!idToken) {
    throw userForbiddenError
  }
  try {
    await firebaseAdmin.auth().verifyIdToken(idToken)
    return true
  } catch (error) {
    throw userForbiddenError
  }
}

module.exports = {
  getMovies: async (idToken) => {
    // check that client is authenticated thanks to Firebase Admin
    // if true, display list of movies
    await checkUser(idToken);

    return fetchMovies('Star Trek');
  },
}

