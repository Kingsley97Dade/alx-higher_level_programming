#!/usr/bin/node

'use strict';

const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.log('Usage: ./count_movies_with_character.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the Star Wars API endpoint
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('An error occurred while making the GET request:', err);
  } else {
    if (response.statusCode !== 200) {
      console.error('Failed to fetch movie information:', response.statusMessage);
    } else {
      const films = JSON.parse(body).results;
      const wedgeAntillesMovies = films.filter((film) =>
        film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );
      console.log('Number of movies with Wedge Antilles:', wedgeAntillesMovies.length);
    }
  }
});

