/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.search = React.createRef()
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.handleChange()
  }

  handleChange() {
    const criterion = this.search.current.value
    this.props.fetchUsers(criterion)
  }

  render() {
    const { request } = this.props

    return (
      <div className='search'>
        <input
          id='search'
          type='text'
          placeholder='Search people by name'
          autoComplete='off'
          ref={this.search}
          onChange={this.handleChange}
        />
        <div className='loading' style={{ display: request ? 'block' : 'none' }}>⚙️</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    request: state.users.request
  }
}

const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    fetchUsers: (criterion) => dispatch(fetchUsers(criterion))
  }
}
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Search)
