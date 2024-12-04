$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    // Kiểm tra thiết bị là mobile hay desktop
  

   

    // Khởi tạo Turn.js
    $('#flipbook').turn({
      width: flipbookWidth,      // Đặt chiều rộng flipbook
      height: flipbookHeight,    // Đặt chiều cao flipbook
      autoCenter: true,          // Tự động căn giữa flipbook
    
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
