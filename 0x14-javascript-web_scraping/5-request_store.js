#!/usr/bin/node

'use strict';

const fs = require('fs');
const request = require('request');

// Check if the URL and file path arguments are provided
if (process.argv.length < 4) {
  console.log('Usage: ./fetch_and_store.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, (err, response, body) => {
  if (err) {
    console.error('An error occurred while making the GET request:', err);
  } else {
    if (response.statusCode !== 200) {
      console.error('Failed to fetch webpage:', response.statusMessage);
    } else {
      // Write the body response to the file asynchronously with utf-8 encoding
      fs.writeFile(filePath, body, 'utf-8', (writeErr) => {
        if (writeErr) {
          console.error('An error occurred while writing to the file:', writeErr);
        } else {
          console.log('Webpage content has been stored in the file:', filePath);
        }
      });
    }
  }
});

