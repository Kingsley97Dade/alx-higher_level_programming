$(document).ready(function() {
            $("#btn_translate").click(function() {
                // Get the language code from the input field
                var languageCode = $("#language_code").val();

                // Make an AJAX request to fetch the translation
                $.ajax({
                    url: "https://www.fourtonfish.com/hellosalut/hello/",
                    method: "GET",
                    data: { lang: languageCode },
                    success: function(data) {
                        // Display the translation in the helloDiv
                        $("#hello").text(data.hello);
                    },
                    error: function(xhr, status, error) {
                        console.error("Error fetching translation:", error);
                    }
                });
            });
        });
