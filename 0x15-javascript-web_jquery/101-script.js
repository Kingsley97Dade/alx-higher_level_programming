$(document).ready(function() {
            // Add item to list
            $("#add_item").click(function() {
                // Create a new <li> element with text "Item"
                var newItem = $("<li>").text("Item");
                $("ul.my_list").append(newItem);
            });

            // Remove item from list
            $("#remove_item").click(function() {
                $("ul.my_list li:last-child").remove();
            });

            // Clear list
            $("#clear_list").click(function() {
                $("ul.my_list").empty();
            });
        });
