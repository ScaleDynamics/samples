/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

// import WarpJS engin and generated client library in node_modules
import '@warpjs/engine'
import { getMovies } from 'warp-server'

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
    const data = await getMovies(accessToken)
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