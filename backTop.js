    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    //$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

//another variant
    function choiseVisibility($scrollToTop) {
        $(document).scrollTop() > 600 ? $scrollToTop.show(100) : $scrollToTop.hide(100);
    }
    function scroll_position() {
        var $scrollToTop = $('.scrollToTop');
        if ($scrollToTop.length) {
            choiseVisibility($scrollToTop);
            $(window).on('scroll', function() {
                choiseVisibility($scrollToTop);
            });
            $scrollToTop.on('click', function() {
                $('html, body').animate({scrollTop: 0}, 500);
            });
        }
    }
    scroll_position();
