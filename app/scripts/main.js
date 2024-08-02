
AOS.init();

$(document).ready(function () {

    const d = new Date();
    let text = d.toLocaleTimeString();
    $('.header__time').html(text);

    var $targetElement = $('header');
    var scrollTrigger = 50; // Change this value to your desired scroll position

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > scrollTrigger) {
            $targetElement.addClass('scrolled');
        } else {
            $targetElement.removeClass('scrolled');
        }
    });


    // var video = $('#myVideo').get(0);
    // video.muted = true;

    // video.play().catch(function(error) {
    //     // Autoplay failed, show fallback message
    //     $('#fallback-message').show();
    // });

    // $('#playFallback').click(function(e) {
    //     e.preventDefault();
    //     video.play();
    // });



    $('#menu, #close').click(function () {
        // Toggle 'active' class on the navList
        $('.header__navlist').toggleClass('menu__active');
        // Toggle 'menu--noscroll' class on the body
        $('body').toggleClass('menu--noscroll');
    });

    // Close the menu when clicking outside of it
    $(document).mousedown(function (event) {
        var $target = $(event.target);
        var isMenuOpen = $('.header__navlist').hasClass('menu__active');

        // If the menu is open and the click is outside the menu, close the menu
        if (isMenuOpen && !$target.closest('.header__navlist').length && !$target.closest('#menu').length) {
            $('.header__navlist').removeClass('menu__active');
            $('body').removeClass('menu--noscroll');
        }
    });
});
