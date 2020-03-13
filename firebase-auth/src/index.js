/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS
import { defaultWarper as warper } from '@warpjs/warp'
import engine from '@warpjs/engine'

// import firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebase-config'

// init WarpJS
engine.init()

// init firebase
firebase.initializeApp(firebaseConfig)

const loginNode = document.getElementById('login-form')
const logoutNode = document.getElementById('logout-form')
const errorNode = document.getElementById('error')

// listen firebase to see if user is logged
let idToken = null
let firebaseUser = null
firebase.auth().onAuthStateChanged(async (user) => {
  if (user !== null) {
    firebaseUser = user
    idToken = await user.getIdToken()
    displayMovies()
  } else {
    onError()
  }
})

// connect sign in button
document.getElementById('signin').addEventListener('click', async () => {
  // sign in with Google connect thanks firebase
  // when user will be connected, onAuthStateChanged listener will triggered
  // and refresh page
  await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
})

// connect signout button
document.getElementById('signout').addEventListener('click', async () => {
  // sign out
  // when user will be disconnected, onAuthStateChanged listener will triggered
  // to refresh page
  await firebase.auth().signOut()
})

// warp function

// check that client is authenticated thanks to firebase
// if true, display list of movies
const fetchMovies = async () => {
  'warp +server -client'

  const { checkUser, fetchMovies } = require('../server/index')

  // WarpJS is so magic! idToken client variable is automatically sent to the server
  await checkUser(idToken)

  return fetchMovies('Star Trek')
}

async function displayMovies() {
  try {
    logoutNode.style.display = ''
    loginNode.style.display = 'none'
    errorNode.style.display = 'none'
    result.innerHTML = '⚙️ loading...'
    // warp call
    const movies = await warper.call(fetchMovies)

    // render result
    if (movies && movies.length) {
      result.innerHTML = `
        <h2>Hi ${firebaseUser.displayName}!</h2>
        <ul>
          ${movies
            .map(
              (movie) => `
            <li>
              <h3>${movie.title} (${movie.year})</h3>
              <img src="${movie.poster}" width="100"/>
              <p>${movie.plot}</p>
            </li>
          `
            )
            .join('')}
        </ul>`
    }
  } catch (e) {
    onError()
  }
}

function onError() {
  logoutNode.style.display = 'none'
  result.innerHTML = ''
  errorNode.style.display = ''
  loginNode.style.display = ''
}
