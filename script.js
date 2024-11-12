$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    $('#flipbook').turn({
      width: $(window).width() * 0.8,   // Lấy chiều rộng động
      height: $(window).height() * 0.6, // Lấy chiều cao động
      autoCenter: true,                 // Tự động căn giữa flipbook
      display: 'single',                // Hiển thị 1 trang tại một thời điểm
      acceleration: true,               // Tăng tốc để mượt mà hơn
      gradients: true,                  // Hiệu ứng gradient khi lật
      duration: 800                     // Thời gian lật trang
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }

  // Đảm bảo flipbook có thể lật khi thay đổi kích thước màn hình
  $(window).resize(function() {
    $('#flipbook').turn('size', $(window).width() * 0.8, $(window).height() * 0.6);
  });
});

