$(document).ready(function() {
  // Select the <div> element with ID update_header using JQuery
  var updateHeader = $("#update_header");

  // Check if the update_header element exists
  if (updateHeader.length) {
    // Add a click event listener to the update_header element
    updateHeader.click(function() {
      // Select the <header> element using its tag name
      var header = $("header");

      // Check if the header element exists
      if (header.length) {
        // Update the text of the header element to "New Header!!!"
        header.text("New Header!!!");
      } else {
        console.error("Header element not found.");
      }
    });
  } else {
    console.error("update_header element not found.");
  }
});
