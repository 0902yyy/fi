 const flipbookWidth = isMobile ? $(window).width() * 0.8 : 1000;  // Mobile: 80% chiều rộng màn hình, Desktop: cố định
    const flipbookHeight = isMobile ? $(window).width() * 0.8 : 500;  // Mobile: hình vuông, Desktop: chiều cao cố định

    // Khởi tạo Turn.js
    $('#flipbook').turn({
      width: 1000,           // Đặt chiều rộng flipbook
      height: 500,           // Đặt chiều cao flipbook
      autoCenter: true,      // Tự động căn giữa flipbook
      display: 'double',     // Hiển thị 2 trang cùng lúc
      acceleration: true,    // Tăng tốc để mượt mà hơn
      gradients: true,       // Hiệu ứng gradient khi lật
      duration: 800          // Thời gian lật trang
      width: flipbookWidth,      // Đặt chiều rộng flipbook
      height: flipbookHeight,    // Đặt chiều cao flipbook
      autoCenter: true,          // Tự động căn giữa flipbook
      display: isMobile ? 'single' : 'double',  // Mobile: 1 trang, Desktop: 2 trang
      acceleration: true,        // Tăng tốc cho hiệu ứng mượt mà hơn
      gradients: true,           // Hiệu ứng gradient khi lật
      duration: 800              // Thời gian lật trang
    });

    // Sự kiện cho nút "prev" (trang trước)
$(document).ready(function() {
    $('.next').click(function() {
      $('#flipbook').turn('next');
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
