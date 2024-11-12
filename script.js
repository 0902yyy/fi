$(document).ready(function() {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    function initializeFlipbook() {
      const isMobile = $(window).width() <= 768;
      
      // Lấy kích thước cho flipbook dựa trên loại thiết bị
      const flipbookWidth = isMobile ? $(window).width() * 0.8 : $(window).width() * 0.8;
      const flipbookHeight = isMobile ? $(window).width() * 0.8 : $(window).height() * 0.6;

      $('#flipbook').turn({
        width: flipbookWidth,     // Lấy chiều rộng động
        height: flipbookHeight,   // Lấy chiều cao động
        autoCenter: true,         // Tự động căn giữa flipbook
        display: isMobile ? 'single' : 'double', // Hiển thị 1 trang cho mobile, 2 trang cho desktop
        acceleration: true,       // Tăng tốc cho hiệu ứng mượt mà hơn
        gradients: true,          // Hiệu ứng gradient khi lật
        duration: 800,            // Thời gian lật trang
        when: {
          turning: function(event, page, view) {
            // Căn giữa trang khi lật
            if (page == 1) {
              $(this).turn('center');
            }
          }
        }
      });
    }

    // Khởi tạo flipbook khi tải trang
    initializeFlipbook();

    // Đảm bảo flipbook có thể lật khi thay đổi kích thước màn hình
    $(window).resize(function() {
      initializeFlipbook();  // Re-initialize flipbook khi thay đổi kích thước màn hình
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
