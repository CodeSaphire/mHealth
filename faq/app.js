$(document).ready(function () {
    // Smooth Scrolling
    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        // event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 800);
      }
    });

    // Show/Hide Toggle
    $('.card-header button').click(function () {
      $(this).toggleClass('collapsed');
    });

    // Expand All
    $('#expandAll').click(function () {
      $('.collapse').collapse('show');
    });

    // Collapse All
    $('#collapseAll').click(function () {
      $('.collapse').collapse('hide');
    });

    // Scroll-to-Top Button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    $('.scroll-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  // Hamburger menu toggle
  $('.navbar-toggler').click(function () {
    $(this).toggleClass('open');
    $('.navbar-collapse').slideToggle();
  });

