$(document).ready(function() {
    var flipbook = $('#flipbook');

    // Khởi tạo Turn.js
    flipbook.turn({
        width: '100%', // Chiều rộng tự động
        height: '500px', // Chiều cao của flipbook
        duration: 1000, // Thời gian lật trang
        gradients: true, // Bật gradient cho lật trang
        autoCenter: true, // Tự động căn giữa flipbook
        elevation: 50, // Độ cao khi lật trang
        pages: 12, // Số trang
        display: 'double', // Mặc định hiển thị trang đôi

        when: {
            turning: function(event, page, view) {
                var book = $(this);
                var currentPage = book.turn('page');
                var pages = book.turn('pages');

                // Cập nhật URI cho trang hiện tại
                Hash.go('page/' + page).update();
                disableControls(page); // Kiểm soát các nút điều hướng
            },
            turned: function(event, page, view) {
                disableControls(page);
                $(this).turn('center');
                // Update giá trị thanh trượt nếu có
                $('#slider').slider('value', getViewNumber($(this), page));
            },
            missing: function(event, pages) {
                // Thêm các trang chưa có trong flipbook
                for (var i = 0; i < pages.length; i++) {
                    addPage(pages[i], $(this));
                }
            }
        }
    });

    // Xử lý thay đổi chế độ hiển thị trang (single/double) khi thay đổi kích thước cửa sổ
    function checkWidth() {
        var win = $(window);
        if (win.width() >= 820) {
            flipbook.turn('display', 'double'); // Hiển thị 2 trang
        } else {
            flipbook.turn('display', 'single'); // Hiển thị 1 trang
        }
    }

    // Kiểm tra độ rộng ngay khi tải trang
    checkWidth();

    // Kiểm tra lại khi resize
    $(window).resize(function() {
        checkWidth();
    });
});
