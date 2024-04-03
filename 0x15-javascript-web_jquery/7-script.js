$(document).ready(function() {
  // Make an AJAX request to fetch data from the URL
  $.ajax({
    url: "https://swapi-api.alx-tools.com/api/people/5/?format=json",
    method: "GET",
    success: function(data) {
      // Select the <div> element with ID character using JQuery
      var characterDiv = $("#character");

      // Check if the characterDiv element exists
      if (characterDiv.length) {
        // Display the character name in the characterDiv
        characterDiv.text(data.name);
      } else {
        console.error("characterDiv element not found.");
      }
    },
    error: function(xhr, status, error) {
      console.error("Error fetching data:", error);
    }
  });
});
