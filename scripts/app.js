$(document).ready(function () {
    var isScrolling;

    function hideNavbar() {
        $('.navbar').addClass('hidden');
    }

    function showNavbar() {
        $('.navbar').removeClass('hidden');
    }

    // Parallax effect on scroll
    $(window).scroll(function () {
        clearTimeout(isScrolling);
        hideNavbar();

        isScrolling = setTimeout(function () {
            showNavbar();
        }, 100);
    });

    // Parallax effect on scroll
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.hero-section').css('background-position-y', -(scrollTop / 2) + 'px');
    });
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        $('.hero-section').css('transform', 'translate3d(0, ' + -(scrollTop * 0.5) + 'px, 0)');
        // $('#what_is_mhealth').css('transform', 'translate3d(0, ' + -(scrollTop * 0.5) + 'px, 0)');
    });
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        // $('.hero-section').css('transform', 'translate3d(0, ' + -(scrollTop * 0.5) + 'px, 0)');
        // $('#what_is_mhealth').css('transform', 'translate3d(0, ' + -(scrollTop * 0.5) + 'px, 0)');
    });

    // Smooth scrolling to target sections
    $('.nav-link').click(function (e) {
        // e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Show/hide scroll-to-top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').addClass('show');
        } else {
            $('.scroll-to-top').removeClass('show');
        }
    });

    // Scroll to top on button click
    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Hamburger menu toggle
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('open');
        $('.navbar-collapse').slideToggle();
    });
});