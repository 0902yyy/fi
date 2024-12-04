$(document).ready(function() {
  // Khởi tạo Flipbook
  $("#flipbook").turn({
    width: $("#flipbook").width(),  // Lấy chiều rộng hiện tại của flipbook
    height: $("#flipbook").height(), // Lấy chiều cao hiện tại của flipbook
    autoCenter: true,
    display: "double",    // Hiển thị 2 trang cùng lúc trên desktop
    gradients: true,      // Hiệu ứng gradient khi lật trang
    elevation: 50,        // Độ nổi trang khi lật
  });

  // Điều chỉnh kích thước khi thay đổi kích thước cửa sổ
  $(window).resize(function() {
    const newWidth = $(window).width() < 768 ? $(window).width() : $("#flipbook").width();
    const newHeight = $(window).width() < 768 ? $(window).height() * 0.7 : $("#flipbook").height();

    $("#flipbook").turn("size", newWidth, newHeight);
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
