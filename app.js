$(document).ready(function () {
    // Parallax effect on scroll
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.hero-section').css('background-position-y', -(scrollTop * 0.5) + 'px');
        // $('.hero-section').css('background-position-y', -(scrollTop * 0.1) + 'px');
    });
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.hero-section').css('transform', 'translate3d(0, ' + -(scrollTop * 0.5) + 'px, 0)');
    });

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Scroll-to-Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-to-top').addClass('show');
        } else {
            $('.scroll-to-top').removeClass('show');
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});