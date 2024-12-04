$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    $('#flipbook').turn({
      width: 1000,           // Đặt chiều rộng flipbook
      height: 500,           // Đặt chiều cao flipbook
      autoCenter: true,      // Tự động căn giữa flipbook
      display: 'double',     // Hiển thị 2 trang cùng lúc
      acceleration: true,    // Tăng tốc để mượt mà hơn
      gradients: true,       // Hiệu ứng gradient khi lật
      duration: 800          // Thời gian lật trang
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
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
