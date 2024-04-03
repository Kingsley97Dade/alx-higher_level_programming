$(document).ready(function() {
  // Make an AJAX request to fetch data from the URL
  $.ajax({
    url: "https://swapi-api.alx-tools.com/api/films/?format=json",
    method: "GET",
    success: function(data) {
      // Select the <ul> element with ID list_movies using JQuery
      var listMoviesUl = $("#list_movies");

      // Check if the listMoviesUl element exists
      if (listMoviesUl.length) {
        // Iterate through each movie in the data and add its title to the list
        $.each(data.results, function(index, movie) {
          var listItem = $("<li>").text(movie.title);
          listMoviesUl.append(listItem);
        });
      } else {
        console.error("listMoviesUl element not found.");
      }
    },
    error: function(xhr, status, error) {
      console.error("Error fetching data:", error);
    }
  });
});
