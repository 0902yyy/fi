$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    // Kiểm tra thiết bị là mobile hay desktop
    const isMobile = $(window).width() <= 768;

    // Lấy kích thước cho flipbook tùy theo thiết bị
    const flipbookWidth = isMobile ? $(window).width() * 0.8 : 1000;  // Mobile: 80% chiều rộng màn hình, Desktop: cố định
    const flipbookHeight = isMobile ? $(window).width() * 0.8 : 500;  // Mobile: hình vuông, Desktop: chiều cao cố định

    // Khởi tạo Turn.js
    $(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    $('#flipbook').turn({
      width: 1000,               // Đặt chiều rộng flipbook
      height: 500,               // Đặt chiều cao flipbook
      autoCenter: true,          // Tự động căn giữa flipbook
      display: 'double',         // Hiển thị 2 trang cùng lúc
      acceleration: true,        // Tăng tốc để mượt mà hơn
      gradients: true,           // Hiệu ứng gradient khi lật
      duration: 800,             // Thời gian lật trang
      page: 1                    // Bắt đầu từ trang đầu
    });

    // Khi bấm nút "previous", chuyển trang và giữ hiệu ứng lật
    $('.prev').click(function() {
      $('#flipbook').turn('previous'); // Lật trang trước
    });

    // Khi bấm nút "next", chuyển trang và giữ hiệu ứng lật
    $('.next').click(function() {
      $('#flipbook').turn('next'); // Lật trang sau
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
