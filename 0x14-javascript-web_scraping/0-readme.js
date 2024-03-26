#!/usr/bin/node

'use strict';

const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.log('Usage: ./read_file.js <file_path>');
  process.exit(1);
}

const filePath = process.argv[2];

// Read the file asynchronously with utf-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('An error occurred while reading the file:', err);
  } else {
    console.log('File content:', data);
  }
});

