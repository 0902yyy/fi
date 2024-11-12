$(document).ready(function() {
    var $flipbook = $("#flipbook");

    // Hàm resize flipbook để nó chiếm toàn bộ màn hình
    function resizeFlipbook() {
        var width = $(window).width();
        var height = $(window).height();
        
        // Tính toán tỷ lệ để flipbook có kích thước hợp lý
        var aspectRatio = 2 / 3;  // Tỷ lệ 2:3 cho flipbook (hoặc thay đổi theo nhu cầu)

        if (width / height > aspectRatio) {
            height = width / aspectRatio;  // Điều chỉnh chiều cao nếu màn hình quá rộng
        } else {
            width = height * aspectRatio;  // Điều chỉnh chiều rộng nếu màn hình quá cao
        }

        // Đảm bảo flipbook được căn giữa
        $flipbook.turn('size', width, height);
    }

    // Lắng nghe sự kiện resize
    $(window).resize(function() {
        resizeFlipbook();
    });

    // Khởi tạo flipbook với các hiệu ứng và tùy chọn
    $flipbook.turn({
        autoCenter: true,  // Căn giữa flipbook tự động
        display: 'double', // Hiển thị 2 trang cùng lúc
        duration: 1000,    // Thời gian hiệu ứng lật
        acceleration: true, // Tăng tốc lật
        when: {
            turning: function(event, page, view) {
                // Bạn có thể xử lý sự kiện lật trang tại đây
                console.log('Page ' + page + ' turned');
            },
            missing: function(event, pages) {
                // Thêm các trang mới nếu thiếu
                for (var i = 0; i < pages.length; i++) {
                    addPage(pages[i]);
                }
            }
        }
    });

    // Gọi resize flipbook ngay khi tải xong trang
    resizeFlipbook();
});
