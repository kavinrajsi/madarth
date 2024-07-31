
AOS.init();

$(document).ready(function () {

    const d = new Date();
    let text = d.toLocaleTimeString();
    $('.header__time').html(text);

    $('#menu, #close').click(function () {
        // Toggle 'active' class on the navList
        $('.header__navlist').toggleClass('menu__active');
        // Toggle 'menu--noscroll' class on the body
        $('body').toggleClass('menu--noscroll');
    });
});