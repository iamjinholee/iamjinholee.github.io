/*  ---------------------------------------------------
    Template Name: Local Direction
    Description: Local Direction HTML Template
    Author: Colorlib
    Author URI: https://www.colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*-----
        newly added 070322
    -------*/
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $(".zoom img").css({
          transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
          //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
          //"-webkit-filter": "blur(" + (scroll/200) + "px)",
          //filter: "blur(" + (scroll/200) + "px)"
        });
      });

    // JY: removed... i added vanilla js code for this :) 081222

    // $(".read-more-btn").click(function(){
    //     $(this).toggleClass("show-more");
    //    $(".wrapper ul").toggleClass("show-more");
   
    //    if($(".read-more-btn").hasClass("show-more")){
    //      $(".more-btn-text").text("Read Less");
    //    }
    //    else{
    //      $(".more-btn-text").text("Read More");
    //    }
    //  });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
	$(this).css('background-position', '50% 20%');
	if(window.matchMedia("(max-width: 767px)").matches){
		$(this).css('background-size', '100%');
		// $(this).css('background-position', '50% 20%');
		$(this).css('max-height', '300px');
	}
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    $('.slicknav_nav ul ').prepend('<li class="header-right-warp"></li>');
    $('.header-right').clone().prependTo('.slicknav_nav > ul > .header-right-warp');

    /*----------------------
        Testimonial Slider
    -----------------------*/
    $(".testimonial-item").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoplay: false,
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.pop-up').magnificPopup({
        type: 'image'
    });

    /*-------------------
		Category Select
	--------------------- */
    $('.ca-search').niceSelect();

    /*-------------------
		Local Select
	--------------------- */
    $('.lo-search').niceSelect();

    /*-------------------
		Arrange Select
	--------------------- */
    $('.arrange-select select').niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".filter-left .category-filter .category-option .co-item label").on('click', function () {
        $(".filter-left .category-filter .category-option .co-item label").removeClass('active');
        $(this).addClass('active');
    });

    $(".filter-left .rating-filter .rating-option .ro-item label").on('click', function () {
        $(".filter-left .rating-filter .rating-option .ro-item label").removeClass('active');
        $(this).addClass('active');
    });

    $(".filter-left .distance-filter .distance-option .do-item label").on('click', function () {
        $(".filter-left .distance-filter .distance-option .do-item label").removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);
