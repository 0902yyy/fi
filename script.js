$(document).ready(function() {
  // Khởi tạo Flipbook
  $('#flipbook').turn({
    width: '100%',  // Đặt chiều rộng cho Flipbook
    height: '500px',  // Đặt chiều cao cho Flipbook
    duration: 1000,  // Thời gian chuyển trang (ms)
    gradients: true,  // Bật hiệu ứng gradient khi lật trang
    autoCenter: true,  // Tự động căn giữa
    elevation: 50,  // Độ dốc khi lật trang
    pages: 12,  // Số trang trong flipbook
    display: 'double',  // Hiển thị 2 trang trên màn hình
    when: {
      turning: function(event, page, view) {
        var book = $(this);
        var currentPage = book.turn('page');
        var pages = book.turn('pages');
        console.log('Current page: ' + currentPage);
      },
      turned: function(event, page, view) {
        $(this).turn('center');
      },
      missing: function(event, pages) {
        for (var i = 0; i < pages.length; i++) {
          addPage(pages[i], $(this));
        }
      }
    }
  });

  // Thay đổi chế độ hiển thị khi thay đổi kích thước cửa sổ
  $(window).resize(function() {
    var win = $(this); //this = window
    if (win.width() >= 820) {
      $('#flipbook').turn('display', 'double');
    } else {
      $('#flipbook').turn('display', 'single');
    }
  });
  
  // Đảm bảo chế độ hiển thị chính xác khi lần đầu vào trang
  $(window).trigger('resize');
});
