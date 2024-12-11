$(function () {

    "use strict";

    //===========POP_UP===========    
    $(".close_popup").on("click", function () {
        $(".popup_subscribe_area").fadeOut();
    });


    //======menu fix js======
    var navoff = $('.main_menu').offset().top;
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });


    //======menu search js======
    $(".menu_search").on("click", function () {
        $(".menu_search_area").addClass("show_search");
    });

    $(".close_search").on("click", function () {
        $(".menu_search_area").removeClass("show_search");
    });


    //======select js=======
    $('.select_js').niceSelect();


    //======marquee animi=======
    $('.marquee_animi').marquee({
        speed: 80,
        gap: 140,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    //======category slider======
    $('.category_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //=====counter js=====   
    $('.counter').countUp();


    //=====venobox js=====   
    $('.venobox').venobox();


    //=======SELECT2====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });


    //=====color_tab js=====
    $('#filter_area').colorfulTab();


    //======testimonial slider======
    $('.testi_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',


        responsive: [

            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    //======popular food slider======
    $('.popular_food_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======popular food slider======
    $('.testimonial_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
        prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
    });


    //======menu item 4 slider======
    $('.menu_4_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',
    });


    //====== testimonial 3 slider======
    $('.testimonial_3_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
    });


    //======gallery slider======
    $('.gallery_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======instagram slider======
    $('.instagram_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======recipes slider======
    $('.recipes_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //======lunchmenu slider======
    $('.lunch_menu_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //======slider ranger======
    jQuery(function () {
        jQuery("#slider_range").flatslider({
            min: 0, max: 1000,
            step: 5,
            values: [0, 1000],
            range: true,
            einheit: '$'
        });
    });


    //=======STICKY SIDEBAR======== 
    $(".sticky_sidebar").stickit({
        top: 70,
    })


    //=====RELATED SLIDER====== 
    $('.related_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    //====== menu details slider ======= 
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true
    });


    //====== menu details popover ======= 
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    //====BARFILLER JS========
    $(document).ready(function () {
        $('#bar1').barfiller();
        $('#bar2').barfiller();
        $('#bar3').barfiller();
        $('#bar4').barfiller();
    });


    //======ANIMATED HEADING JS=======
    $('.animate-loading-bar').animatedHeadline({
        animationType: 'loading-bar'
    });


    //=======WOW JS========
    new WOW().init();


    //======MOBILE MENU BUTTON=======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });


});
