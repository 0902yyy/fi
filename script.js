$(document).ready(function() {
    // Initialize the flipbook with Turn.js
    $("#flipbook").turn({
        autoCenter: true
    });

    // Handle window resize
    var flipbookEL = document.getElementById('flipbook');
    
    window.addEventListener('resize', function () {
        flipbookEL.style.width = '';
        flipbookEL.style.height = '';
        $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
    });
});

