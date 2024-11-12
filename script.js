$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    function initializeFlipbook() {
      const isMobile = $(window).width() <= 768;
      $('#flipbook').turn({
        width: $(window).width() * 0.8,   // Lấy chiều rộng động
        height: $(window).height() * 0.6, // Lấy chiều cao động
        autoCenter: true,                 // Tự động căn giữa flipbook
        display: isMobile ? 'single' : 'double', // Thay đổi display tùy theo kích thước màn hình
        acceleration: true,               // Tăng tốc để mượt mà hơn
        gradients: true,                  // Hiệu ứng gradient khi lật
        duration: 800                     // Thời gian lật trang
      });
    }

    // Khởi tạo flipbook khi tải trang
    initializeFlipbook();

    // Đảm bảo flipbook có thể lật khi thay đổi kích thước màn hình
    $(window).resize(function() {
      $('#flipbook').turn('size', $(window).width() * 0.8, $(window).height() * 0.6);
      $('#flipbook').turn('destroy').turn('size', $(window).width() * 0.8, $(window).height() * 0.6);
      initializeFlipbook(); // Re-initialize flipbook khi resize
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
