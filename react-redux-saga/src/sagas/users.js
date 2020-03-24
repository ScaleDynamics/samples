/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

import { takeLatest, call, put } from 'redux-saga/effects'
import { USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from '../actions/'
import { fetchUsers } from '../warp'

export default function* watchUsers() {
  yield takeLatest(USERS_FETCH_REQUEST, workerSaga)
}

function* workerSaga(params) {
  try {
    const result = yield call(fetchUsers, params.criterion)
    yield put({ type: USERS_FETCH_SUCCESS, result })
  } catch (error) {
    yield put({ type: USERS_FETCH_ERROR, error })
  }
}