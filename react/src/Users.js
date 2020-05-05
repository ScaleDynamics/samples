/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

import React from 'react'

// init WarpJS
import WarpServer from 'warp-server'
const { getUsers } = new WarpServer()

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null,
    }
  }

  componentDidMount() {
    getUsers().then((data) => {
      this.setState({ users: data })
    })
  }

  render() {
    const { users } = this.state

    return (
      <div className="users">
        {users ? (
          <div>
            <ul>
              {users.map((item, i) => (
                <li key={item.id}>
                  <img src={item.photo} alt={'photo: ' + item.name} />
                  <h3>{item.name}</h3>
                  <p><span role="img" aria-label="email">✉️</span> {item.email}</p>
                  <p><span role="img" aria-label="phone">📞</span> {item.phone}</p>
                  <p><span role="img" aria-label="work">🏢</span> {item.work}</p>
                  <p><span role="img" aria-label="city">🏠</span> {item.city}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="message">loading...</div>
        )}
      </div>
    )
  }
}

export default Users
