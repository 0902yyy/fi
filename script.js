$(document).ready(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);  // Kiểm tra xem là thiết bị di động hay không

    var flipbookOptions = {
        width: 800,                // Kích thước mặc định cho desktop
        height: 600,
        autoCenter: true,          // Căn giữa flipbook
        display: 'double',         // Hiển thị một trang tại một thời điểm
        mobile: isMobile,          // Kích hoạt chế độ cảm ứng trên mobile
        duration: 1000,            // Thời gian chuyển trang
        gradients: true,           // Hiệu ứng gradient cho lật trang
        elevation: 50,             // Độ sâu của trang khi lật
    };

    if (isMobile) {
        flipbookOptions.width = $(window).width();   // Lấy chiều rộng màn hình điện thoại
        flipbookOptions.height = $(window).height(); // Lấy chiều cao màn hình điện thoại
    }

    $('#flipbook').turn(flipbookOptions);  // Áp dụng cấu hình Turn.js
});
