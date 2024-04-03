document.addEventListener("DOMContentLoaded", function() {
            // Select the <header> element using document.querySelector
            var header = document.querySelector("header");

            // Check if the header element exists
            if (header) {
                // Update the text color to red (#FF0000)
                header.style.color = "#FF0000";
            } else {
                console.error("Header element not found.");
            }
        });
