/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/index'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../sagas/'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store