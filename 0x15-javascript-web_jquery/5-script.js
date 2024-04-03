$(document).ready(function() {
  // Select the <div> element with ID add_item using JQuery
  var addItem = $("#add_item");

  // Check if the add_item element exists
  if (addItem.length) {
    // Add a click event listener to the add_item element
    addItem.click(function() {
      // Create a new <li> element with text "Item"
      var newItem = $("<li>").text("Item");

      // Append the new <li> element to the <ul> with class "my_list"
      $("ul.my_list").append(newItem);
    });
  } else {
    console.error("add_item element not found.");
  }
});
