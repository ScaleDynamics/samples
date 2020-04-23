/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */

const axios = require('axios');

const getUsers = async () => {
  // fetch users from API
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

  // Pick attributes and add photo
  return data.map(({ id, name, email, phone, company, address }) => ({
    id,
    name,
    email,
    phone,
    city: address.city,
    work: company.name,
    photo: 'https://randomuser.me/api/portraits/lego/' + id % 10 + '.jpg'
  }));
};

module.exports = { getUsers }
