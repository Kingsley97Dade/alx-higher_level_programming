#!/usr/bin/node

'use strict';

const fs = require('fs');

// Check if the file path and string arguments are provided
if (process.argv.length < 4) {
  console.log('Usage: ./write_file.js <file_path> "<string_to_write>"');
  process.exit(1);
}

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

// Write the content to the file asynchronously with utf-8 encoding
fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
  } else {
    console.log('Content has been written to the file successfully.');
  }
});

