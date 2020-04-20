/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

import '@warpjs/engine';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store/'

import Users from './components/Users'
import Search from './components/Search'

function Root() {
  return (
    <Provider store={store}>
      <Search />
      <Users />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))