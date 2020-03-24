/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

export const USERS_FETCH_REQUEST = 'USERS_FETCH_REQUEST'
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR'

export function fetchUsers(criterion) {
  return { type: USERS_FETCH_REQUEST, criterion }
}