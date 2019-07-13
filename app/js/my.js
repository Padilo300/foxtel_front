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

    $('#sliderSpecialHome').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.sliderSpecialHome  .prevArrow'),
        nextArrow: $('.sliderSpecialHome  .nextArrow'),
        dotsClass: 'mainPageMainSection-slickDots',
    });

    $('#sliderSpecialHome2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.sliderSpecialHome  .prevArrow'),
        nextArrow: $('.sliderSpecialHome  .nextArrow'),
        dotsClass: 'mainPageMainSection-slickDots',
    });

    $('#sliderSpecialHome3').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.sliderSpecialHome  .prevArrow'),
        nextArrow: $('.sliderSpecialHome  .nextArrow'),
        dotsClass: 'mainPageMainSection-slickDots',
    });

    $('#megaSlick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.sliderSpecialHome  .prevArrow'),
        nextArrow: $('.sliderSpecialHome  .nextArrow'),
        dotsClass: 'mainPageMainSection-slickDots',
    });
    


    $('.sliderSpecialHomeSlideFigure').on('click', function(){
        $('.sliderSpecialHomeSlideFigure .active').removeClass('on');
        $(this).find('.active').addClass('on');
        var index = $(this).data('slide');
        $('#megaSlick').slick('slickGoTo', index)
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

    $('#slider_ourCapabilities').slick({
        dots: true,
        dotsClass: 'mainPageMainSection-slickDots',
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.pageHomeSliderReview .prevArrow'),
        nextArrow: $('.pageHomeSliderReview .nextArrow'),
    });

    

    $('#whyMe_sectionListRecord  .whyMe_dots').on('click', function(){
        $('#whyMe_sectionListRecord  .whyMe_dots').removeClass('active');
        $(this).addClass('active');
        var dotsId = $(this).data('dots');
        $('#whyMeArticleWrapp .article').removeClass('active');
        $('#'+dotsId).addClass('active');
    });

    $('.footer_section .title').on('click',function(){
        $(this).siblings(".listNav").toggleClass('active');
    });



   
     new WOW().init();
});
