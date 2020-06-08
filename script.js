$(".burger").on("click", function () {
    $(".fas, nav").toggleClass("off");
})
$('.kadra').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.cadre').offset().top
    }, 500)
})

$('.galeria').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.gallery').offset().top
    }, 500)
})

$('.terminarz').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.schedule').offset().top
    }, 500)
})
$('.kontakt').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.socials').offset().top
    }, 500)
})
$('.info .first, span.hide').on('click', function () {
    $('.modal-wrap').toggleClass('active');
    $('.flexschedule').toggleClass('blur');
})
$('.info .second, span.hide2').on('click', function () {
    $('.modal-wrap2').toggleClass('active');
    $('.flexschedule').toggleClass('blur');
})

$('.info .third, span.hide3').on('click', function () {
    $('.modal-wrap3').toggleClass('active');
    $('.flexschedule').toggleClass('blur');
})

