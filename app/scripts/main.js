
AOS.init();

const d = new Date();
let text = d.toLocaleTimeString();
document.getElementById("header__time").innerHTML = text;


$(document).ready(function () {
    $('#menu').click(function () {
        // Toggle 'active' class on the navList
        $('.header__navlist').toggleClass('menu__active');
        // Toggle 'menu--noscroll' class on the body
        $('body').toggleClass('menu--noscroll');
    });
});