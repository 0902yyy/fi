$(document).ready(function () {
  // Kiểm tra Turn.js đã được tải chưa
  if ($.isFunction($.fn.turn)) {
    function setupFlipbook() {
      const isMobile = $(window).width() <= 768;

      // Tính kích thước flipbook
      const flipbookWidth = isMobile ? $(window).width() * 0.9 : 1000; // Mobile: 90% màn hình, Desktop: cố định
      const flipbookHeight = isMobile ? flipbookWidth / 2 : 500;       // Mobile: Tỷ lệ 2:1, Desktop: cố định

      // Xóa flipbook cũ (nếu đã khởi tạo)
      if ($('#flipbook').data('turn')) {
        $('#flipbook').turn('destroy');
      }

      // Khởi tạo lại flipbook
      $('#flipbook').turn({
        width: flipbookWidth,       // Chiều rộng flipbook
        height: flipbookHeight,     // Chiều cao flipbook
        autoCenter: true,           // Tự động căn giữa flipbook
        display: 'double',          // Hiển thị 2 trang trên mọi thiết bị
        acceleration: true,         // Hiệu ứng lật mượt hơn
        gradients: true,            // Hiệu ứng gradient khi lật
        duration: 800               // Thời gian lật trang
      });
    }

    // Khởi tạo flipbook lần đầu
    setupFlipbook();

    // Lắng nghe sự kiện thay đổi kích thước cửa sổ (window resize)
    $(window).resize(function () {
      setupFlipbook(); // Thiết lập lại flipbook khi kích thước cửa sổ thay đổi
    });

    // Sự kiện cho nút "prev" (trang trước)
    $('.prev').click(function () {
      $('#flipbook').turn('previous');
    });

    // Sự kiện cho nút "next" (trang sau)
    $('.next').click(function () {
      $('#flipbook').turn('next');
    });
  } else {
    console.error("Turn.js chưa được tải đúng.");
  }
});
