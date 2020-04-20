/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

import { all } from 'redux-saga/effects'
import watchUsers from './users'

export function* rootSaga() {
  yield all([
    watchUsers()
  ])
}
