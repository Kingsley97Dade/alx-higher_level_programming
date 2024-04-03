$(document).ready(function() {
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
