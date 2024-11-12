$(document).ready(function() {
    $('#flipbook').turn({
        width: 100%,                // Chiều rộng của Flipbook
        height: 100%,               // Chiều cao của Flipbook
        autoCenter: true,          // Căn giữa flipbook
        display: 'double',         // Hiển thị một trang tại một thời điểm
        mobile: true,              // Kích hoạt chế độ cho điện thoại di động
        duration: 800,            // Thời gian cho mỗi lần lật trang
        gradients: true,           // Hiệu ứng gradient cho lật trang
        elevation: 20              // Độ sâu của lật trang
    });
});

