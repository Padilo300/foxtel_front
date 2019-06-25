$(document).ready(function () {

    function openNav(){
        $('.mobilBar').toggleClass("openNav");
        $('#nav').toggleClass('showNav');
    }

    $('.mobilBar').on('click',function(){
        openNav();
    });
    
    $('#mainPageMainSection-slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.main_section .prevArrow'),
        nextArrow: $('.main_section .nextArrow'),
        dotsClass: 'mainPageMainSection-slickDots',
    });

    $('#pageHomeSliderReview').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.pageHomeSliderReview .prevArrow'),
        nextArrow: $('.pageHomeSliderReview .nextArrow'),
    });
});