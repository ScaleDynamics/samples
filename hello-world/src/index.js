/*
 * Copyright 2020 ScaleDynamics SAS. All rights reserved.
 * Licensed under the MIT license.
 */
'use strict';

function hello (name) {
  return `Hello ${name} from Node.js ${process.version}`;
};

module.exports = { hello };
