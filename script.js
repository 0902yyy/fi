$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    // Kiểm tra thiết bị là mobile hay desktop
    const isMobile = $(window).width() <= 768;
    const flipbookHeight = isMobile ? screenHeight * 0.8 : 500;  // Chiều cao 80% màn hình với mobile, 500px cho desktop
    const flipbookWidth = flipbookHeight * 2;  // Chiều ngang gấp đôi chiều cao

    // Khởi tạo Turn.js
    $('#flipbook').turn({
      width: flipbookWidth,      // Đặt chiều rộng flipbook
      height: flipbookHeight,    // Đặt chiều cao flipbook
      autoCenter: true,          // Tự động căn giữa flipbook
      display: 'double',  // Mobile: 1 trang, Desktop: 2 trang
      acceleration: true,        // Tăng tốc cho hiệu ứng mượt mà hơn
      gradients: true,           // Hiệu ứng gradient khi lật
      duration: 800              // Thời gian lật trang
    });

    // Sự kiện cho nút "prev" (trang trước)
    $('.prev').click(function() {
      $('#flipbook').turn('previous');
    });

    // Sự kiện cho nút "next" (trang sau)
    $('.next').click(function() {
      $('#flipbook').turn('next');
    });

  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
