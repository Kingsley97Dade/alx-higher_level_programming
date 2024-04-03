$(document).ready(function() {
  // Select the <div> element with ID red_header using JQuery
  var redHeader = $("#red_header");

  // Check if the red_header element exists
  if (redHeader.length) {
    // Add a click event listener to the red_header element
    redHeader.click(function() {
      // Select the <header> element using its tag name
      var header = $("header");

      // Check if the header element exists
      if (header.length) {
        // Update the text color to red (#FF0000)
        header.css("color", "#FF0000");
      } else {
        console.error("Header element not found.");
      }
    });
  } else {
    console.error("red_header element not found.");
  }
});
