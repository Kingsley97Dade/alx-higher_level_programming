$(document).ready(function() {
  // Make an AJAX request to fetch data from the URL
  $.ajax({
    url: "https://hellosalut.stefanbohacek.dev/?lang=fr",
    method: "GET",
    success: function(data) {
      // Select the <div> element with ID hello using JQuery
      var helloDiv = $("#hello");

      // Check if the helloDiv element exists
      if (helloDiv.length) {
        // Display the translation of "hello" in the helloDiv
        helloDiv.text(data.hello);
      } else {
        console.error("helloDiv element not found.");
      }
    },
    error: function(xhr, status, error) {
      console.error("Error fetching data:", error);
    }
  });
});
