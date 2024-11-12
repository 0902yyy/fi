$(document).ready(function() {
    // Initialize the flipbook with Turn.js
    var $flipbook = $("#flipbook");

    // Function to resize the flipbook and adjust the size of pages
    function resizeFlipbook() {
        var width = $(window).width();
        var height = $(window).height();

        // Set the aspect ratio of the pages (2:3 aspect ratio in this example)
        var aspectRatio = 2 / 3;

        // Calculate new width and height based on the window size and aspect ratio
        if (width / height > aspectRatio) {
            // If the window is too wide, set the height based on width
            height = width / aspectRatio;
        } else {
            // If the window is too tall, set the width based on height
            width = height * aspectRatio;
        }

        // Resize the flipbook container
        $flipbook.turn('size', width, height);
    }

    // Call the resize function when the page loads
    resizeFlipbook();

    // Handle window resize event
    $(window).resize(function() {
        resizeFlipbook();
    });

    // Initialize the flipbook with Turn.js
    $flipbook.turn({
        autoCenter: true
    });
});
