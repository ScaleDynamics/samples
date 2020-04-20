/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

const axios = require('axios')

const fetchUsers = async (criterion) => {

  // fetch users from API
  try {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    if (criterion) {
      criterion = criterion.toLowerCase()
      data = data.filter(user => user.name.toLowerCase().includes(criterion))
    }

    // Pick attributes
    data = data.map(({ id, name, email, phone, company, address }) => ({
      id,
      name,
      email,
      phone,
      city: address.city,
      work: company.name,
      photo: 'https://randomuser.me/api/portraits/lego/' + id % 10 + '.jpg'
    }))

    return data

  } catch (e) {
    throw new Error('Internal server error!')
  }
}

module.exports = { fetchUsers }