$(document).ready(function() {
  // Khởi tạo Flipbook
  $('#flipbook').turn({
    width: 800,  // Đặt chiều rộng cho flipbook
    height: 600, // Đặt chiều cao cho flipbook
    autoCenter: true, // Tự động căn giữa flipbook
    pages: 22, // Số lượng trang
    display: 'double', // Hiển thị chế độ 2 trang
    duration: 1000,  // Thời gian chuyển trang
    gradients: true, // Hiệu ứng gradient
    elevation: 50, // Độ nổi khi lật trang
    when: {
      turning: function(event, page, view) {
        var book = $(this),
            currentPage = book.turn('page'),
            pages = book.turn('pages');
      },

      turned: function(event, page, view) {
        $(this).turn('center');
      },

      missing: function(event, pages) {
        // Thêm trang khi còn thiếu
        for (var i = 0; i < pages.length; i++) {
          addPage(pages[i], $(this));
        }
      }
    }
  });
});
