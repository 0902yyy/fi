$(document).ready(function() {
  // Khởi tạo Flipbook với các thiết lập cải tiến
  $("#flipbook").turn({
    width: 800,          // Chiều rộng mặc định cho desktop
    height: 500,         // Chiều cao mặc định cho desktop
    autoCenter: true,
    display: "double",   // Hiển thị 2 trang cùng lúc trên desktop
    gradients: true,     // Hiệu ứng gradient khi lật trang
    elevation: 50,       // Độ nổi trang khi lật
    responsive: true     // Đảm bảo responsive
  });

  // Tự động điều chỉnh kích thước khi thay đổi kích thước cửa sổ
  $(window).resize(function() {
    const isMobile = $(window).width() < 768;
    const newWidth = isMobile ? $(window).width() : 800;
    const newHeight = isMobile ? $(window).height() * 0.7 : 500;

    $("#flipbook").turn("size", newWidth, newHeight);
  });
});
