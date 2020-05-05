/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// init WarpJS
import '@warpjs/engine'
import WarpServer from 'warp-server'
const { getMovies } = new WarpServer()

// init Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
// const firebaseConfig = 'YOUR FIREBASE CONFIG HERE'
firebase.initializeApp(firebaseConfig)

const loginNode = document.getElementById('login-form')
const logoutNode = document.getElementById('logout-form')
const errorNode = document.getElementById('error')

// listen Firebase to see if user is logged
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

async function displayMovies() {
  try {
    logoutNode.style.display = ''
    loginNode.style.display = 'none'
    errorNode.style.display = 'none'
    result.innerHTML = '⚙️ loading...'
    // call warp function
    const movies = await getMovies(idToken)
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
