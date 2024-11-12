$(document).ready(function() {
    $('#flipbook').turn({
        width: 800,                // Chiều rộng của Flipbook
        height: 600,               // Chiều cao của Flipbook
        autoCenter: true,          // Căn giữa flipbook
        display: 'double',         // Hiển thị một trang tại một thời điểm
        mobile: true,              // Kích hoạt chế độ cho điện thoại di động
        duration: 1000,            // Thời gian cho mỗi lần lật trang
        gradients: true,           // Hiệu ứng gradient cho lật trang
        elevation: 50              // Độ sâu của lật trang
    });
});

