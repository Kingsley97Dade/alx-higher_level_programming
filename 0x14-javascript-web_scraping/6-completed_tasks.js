#!/usr/bin/node

'use strict';

const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.log('Usage: ./count_completed_tasks.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the JSONPlaceholder API Todos endpoint
request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.error('An error occurred while making the GET request:', err);
  } else {
    if (response.statusCode !== 200) {
      console.error('Failed to fetch data:', response.statusMessage);
    } else {
      const todos = JSON.parse(body);
      const completedTasksByUser = {};

      // Count completed tasks by user ID
      todos.forEach((todo) => {
        if (todo.completed) {
          if (completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId]++;
          } else {
            completedTasksByUser[todo.userId] = 1;
          }
        }
      });

      // Print users with completed tasks
      Object.keys(completedTasksByUser).forEach((userId) => {
        console.log(`User ${userId}: ${completedTasksByUser[userId]} completed tasks`);
      });
    }
  }
});

