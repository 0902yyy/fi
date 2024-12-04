$(document).ready(function () {
  const isMobile = $(window).width() <= 768;

  // Lấy kích thước cho flipbook tùy theo thiết bị
  const flipbookWidth = isMobile ? $(window).width() * 0.8 : 1000;  // Mobile: 80% chiều rộng màn hình
  const flipbookHeight = isMobile ? $(window).width() * 0.8 : 500; // Mobile: hình vuông

  // Khởi tạo flipbook
  $('#flipbook').turn({
    width: flipbookWidth,
    height: flipbookHeight,
    display: isMobile ? 'single' : 'double', // Mobile: 1 trang, Desktop: 2 trang
    autoCenter: true,
  });

  // Sự kiện cho nút "prev" (trang trước)
  $('.prev').click(function () {
    $('#flipbook').turn('previous');
  });

  // Sự kiện cho nút "next" (trang sau)
  $('.next').click(function () {
    $('#flipbook').turn('next');
  });
});
