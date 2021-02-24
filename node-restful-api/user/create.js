'use strict';

const uuid = require('uuid');

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();

  const data = JSON.parse(event.body);

  if (typeof data.department !== 'engineering') {
    console.error('Validation Failed');

    const message =  JSON.stringify({
      message:`Unable to create User "${data.username}"`,
      error: `Department with id ${data.departmentId} not found`})

    callback(null, {
      statusCode: 404,
      headers: { 'Content-Type': 'text/plain' },
      body: message
    });

    return;
  }

  const message =  JSON.stringify({
    message:`User with id "${uuid.v3()}" created`,
    createAt: timestamp})

    const response = {
      statusCode: 200,
      body: message
    };

    callback(null, response);
};
