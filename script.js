$(window).ready(function(){
    const isMobile = $(window).width() < 768;

    $('#book').turn({
        acceleration: true,
        pages: numberOfPages,
        elevation: 50,
        display: isMobile ? 'single' : 'double', // Nếu là mobile thì hiển thị 1 trang
        gradients: !$.isTouch,
        when: {
            turning: function(e, page, view) {
                var range = $(this).turn('range', page);
                for (page = range[0]; page <= range[1]; page++) 
                    addPage(page, $(this));
            },
            turned: function(e, page) {
                $('#page-number').val(page);
            }
        }
    });

    $('#number-pages').html(numberOfPages);

    $('#page-number').keydown(function(e){
        if (e.keyCode == 13)
            $('#book').turn('page', $('#page-number').val());
    });
});

// Điều chỉnh kích thước flipbook khi thay đổi kích thước cửa sổ
$(window).resize(function() {
    const isMobile = $(window).width() < 768;
    $('#book').turn('display', isMobile ? 'single' : 'double');
});
