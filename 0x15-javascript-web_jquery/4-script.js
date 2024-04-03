$(document).ready(function() {
  // Select the <div> element with ID toggle_header using JQuery
  var toggleHeader = $("#toggle_header");

  // Check if the toggle_header element exists
  if (toggleHeader.length) {
    // Add a click event listener to the toggle_header element
    toggleHeader.click(function() {
      // Select the <header> element using its tag name
      var header = $("header");

      // Check if the header element exists
      if (header.length) {
        // Toggle the class "red" and "green" on the header element
        header.toggleClass("red green");
      } else {
        console.error("Header element not found.");
      }
    });
  } else {
    console.error("toggle_header element not found.");
  }
});
