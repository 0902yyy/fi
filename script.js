$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    function initFlipbook() {
      const isMobile = $(window).width() <= 768;

      // Lấy kích thước cho flipbook tùy theo thiết bị
      const flipbookWidth = isMobile ? $(window).width() * 0.8 : 1000;
      const flipbookHeight = isMobile ? $(window).width() * 0.8 : 500;

      // Khởi tạo Turn.js
      $('#flipbook').turn({
        width: flipbookWidth,
        height: flipbookHeight,
        autoCenter: true,
        display: isMobile ? 'single' : 'double',
        acceleration: true,
        gradients: true,
        duration: 800
      });
    }

    // Khởi tạo flipbook ban đầu
    initFlipbook();

    // Thay đổi chế độ hiển thị khi thay đổi kích thước màn hình
    $(window).resize(function() {
      if ($('#flipbook').data('turn')) {
        $('#flipbook').turn('destroy').remove();
        $('body').append('<div id="flipbook"> ... </div>'); // Thêm lại phần nội dung cần thiết vào flipbook
        initFlipbook(); // Khởi tạo lại flipbook với kích thước mới
      }
    });

    // Khi bấm nút "previous"
    $('.prev').click(function() {
      $('#flipbook').turn('previous');
    });

    // Khi bấm nút "next"
    $('.next').click(function() {
      $('#flipbook').turn('next');
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
