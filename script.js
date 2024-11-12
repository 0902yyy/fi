$(document).ready(function() {
    // Khởi tạo flipbook với Turn.js
    var $flipbook = $("#flipbook");

    // Hàm resize flipbook để giữ tỷ lệ
    function resizeFlipbook() {
        var width = $(window).width();
        var height = $(window).height();

        // Set tỷ lệ của trang (ví dụ: tỷ lệ 2:3)
        var aspectRatio = 2 / 3;

        // Tính toán lại chiều rộng và chiều cao phù hợp
        if (width / height > aspectRatio) {
            // Nếu màn hình rộng quá, set chiều cao theo chiều rộng
            height = width / aspectRatio;
        } else {
            // Nếu màn hình cao quá, set chiều rộng theo chiều cao
            width = height * aspectRatio;
        }

        // Resize container flipbook
        $flipbook.turn('size', width, height);
    }

    // Lắng nghe sự kiện resize của cửa sổ
    $(window).resize(function() {
        resizeFlipbook();
    });

    // Khởi tạo flipbook với Turn.js
    $flipbook.turn({
        autoCenter: true, // Căn giữa trang
        display: 'double', // Hiển thị 2 trang cùng một lúc để tạo hiệu ứng lật
        acceleration: true, // Tăng tốc hiệu ứng lật trang
        duration: 1000, // Thời gian lật trang
        when: {
            turning: function(event, page, view) {
                console.log('Page ' + page + ' turned');
            }
        }
    });

    // Gọi resize ngay từ đầu
    resizeFlipbook();
});
