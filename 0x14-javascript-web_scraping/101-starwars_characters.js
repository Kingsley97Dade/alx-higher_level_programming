#!/usr/bin/node

'use strict';

const request = require('request');

// Check if the movie ID argument is provided
if (process.argv.length < 3) {
  console.log('Usage: ./101-starwars_characters.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API endpoint to fetch movie information
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('An error occurred while making the GET request:', err);
  } else {
    if (response.statusCode !== 200) {
      console.error('Failed to fetch movie information:', response.statusMessage);
    } else {
      const movieInfo = JSON.parse(body);
      const charactersUrls = movieInfo.characters;

      // Fetch and print each character's name in the order they appear in the movieInfo.characters array
      charactersUrls.forEach((characterUrl, index) => {
        request.get(characterUrl, (charErr, charResponse, charBody) => {
          if (charErr) {
            console.error('An error occurred while fetching character data:', charErr);
          } else {
            if (charResponse.statusCode !== 200) {
              console.error('Failed to fetch character information:', charResponse.statusMessage);
            } else {
              const characterInfo = JSON.parse(charBody);
              console.log(`${index + 1}. ${characterInfo.name}`);
            }
          }
        });
      });
    }
  }
});

