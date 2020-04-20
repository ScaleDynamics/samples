/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

import React from 'react'
import { connect } from 'react-redux'

class Users extends React.Component {

  render() {
    const { result, error } = this.props

    return (
      <div className='users'>
        {error ? (
          <span className='message error'>{error.message}</span>
        ) : (
            (result && result.length) > 0 ? (
              <div>
                <ul>
                  {result.map((item, i) =>
                    <li key={item.id}>
                      <img src={item.photo} />
                      <h3>{item.name}</h3>
                      <p>✉️ {item.email}</p>
                      <p>📞 {item.phone}</p>
                      <p>🏢 {item.work}</p>
                      <p>🏠 {item.city}</p>
                    </li>
                  )}
                </ul>
              </div>
            ) : (
                <div className='message'>no result found</div>
              )
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.users.result,
    error: state.users.error
  }
}

export default connect(mapStateToProps)(Users)