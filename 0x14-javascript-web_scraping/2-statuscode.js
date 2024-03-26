#!/usr/bin/node

'use strict';

const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.log('Usage: ./get_status_code.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Make a GET request to the specified URL
request.get(url, (err, response) => {
  if (err) {
    console.error('An error occurred while making the GET request:', err);
  } else {
    console.log('Status code:', response.statusCode);
  }
});

