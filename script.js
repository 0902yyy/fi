$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    // Kiểm tra thiết bị là mobile hay desktop
    const isMobile = $(window).width() <= 768;

    // Lấy kích thước cho flipbook tùy theo thiết bị
    const flipbookWidth = isMobile ? $(window).width() * 0.8 : 1000;  // Mobile: 80% chiều rộng màn hình, Desktop: cố định
    const flipbookHeight = isMobile ? $(window).width() * 0.8 : 500;  // Mobile: hình vuông, Desktop: chiều cao cố định

    // Khởi tạo Turn.js
    $('#flipbook').turn({
      width: flipbookWidth,      // Đặt chiều rộng flipbook
      height: flipbookHeight,    // Đặt chiều cao flipbook
      autoCenter: true,          // Tự động căn giữa flipbook
      display: isMobile ? 'single' : 'double',  // Mobile: 1 trang, Desktop: 2 trang
      acceleration: true,        // Tăng tốc để mượt mà hơn
      gradients: true,           // Hiệu ứng gradient khi lật
      duration: 800,             // Thời gian lật trang
      page: 1,
    });

     // Khi bấm nút "previous", lật trang với hiệu ứng cuộn góc
    $('.prev').click(function() {
      $('#flipbook').turn('previous');  // Lật trang trước
 hời gian trễ phù hợp với thời gian lật trang
    });

    // Khi bấm nút "next", lật trang với hiệu ứng cuộn góc
    $('.next').click(function() {
      $('#flipbook').turn('next');  // Lật trang sau

     
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
