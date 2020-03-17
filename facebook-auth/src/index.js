/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS
import { defaultWarper as warper } from '@warpjs/warp'
import engine from '@warpjs/engine'

// init WarpJS
engine.init();

const loginNode = document.getElementById('login-form')
const logoutNode = document.getElementById('logout-form')
const errorNode = document.getElementById('error')
let accessToken = null

// initialize Facebook SDK
window.fbAsyncInit = () => {
  FB.init({
    appId: 'FACEBOOK_APP_ID',
    version: 'v6.0',
    cookie: true,
    status: true,
    xfbml: true
  })

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  }, true)
}

// warp function
//
// check that client is authenticated thanks to facebook login
// if true, display list of movies
const fetchMovies = async () => {
  'warp +server -client'

  const { checkUser, fetchMovies } = require('../server/index')

  // WarpJS is so magic! idToken client variable is automatically sent to the server
  const user = await checkUser(accessToken)
  const movies = await fetchMovies('Star Trek')
  return { user, movies }
}

// connect sign in button
document.getElementById('signin').addEventListener('click', async () => {
  FB.login((response) => {
    statusChangeCallback(response)
  }, { scope: 'public_profile,email' })
})

// connect sign out button
document.getElementById('signout').addEventListener('click', async () => {
  FB.logout((response) => {
    statusChangeCallback(response)
  })
})

async function displayMovies() {
  try {
    logoutNode.style.display = ''
    loginNode.style.display = 'none'
    errorNode.style.display = 'none'
    result.innerHTML = '⚙️ loading...'
    // warp call
    const data = await warper.call(fetchMovies)
    const movies = data.movies
    const user = data.user
    // render result
    if (movies && movies.length) {
      result.innerHTML = `
        <h2>Hi ${user.name}!</h2>
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

function statusChangeCallback(data) {
  if (data.status === 'connected') {
    accessToken = data.authResponse.accessToken
    displayMovies()
  } else {
    accessToken = null
    onError()
  }
}

// load Facebook login script
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));