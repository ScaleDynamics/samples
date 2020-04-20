/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

import { USERS_FETCH_REQUEST, USERS_FETCH_SUCCESS, USERS_FETCH_ERROR } from '../actions/'

const initialState = {
  request: false,
  result: null,
  error: null
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_REQUEST:
      return {
        ...state,
        result: null,
        request: true,
        error: null
      }
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        result: action.result,
        request: false,
        error: null
      }
    case USERS_FETCH_ERROR:
      return {
        ...state,
        result: null,
        error: action.error,
        request: false
      }
    default:
      return state
  }
}

export default reducer