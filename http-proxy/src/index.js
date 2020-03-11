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
const fetchUsers = async () => {
  'warp +server -client'

  const axios = require('axios')

  // fetch users from API
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

  return data
}

// on load
warper.call(fetchUsers).then((response) => {
  result.innerHTML += `
    <h2>User List</h2>
    <div>${response.map((user) => `${user.id} - ${user.name}`).join('<br>')}</div>
  `
})
