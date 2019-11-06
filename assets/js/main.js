(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		// -- start work -- //

		// service slider

		$(".listing_carousel").owlCarousel({
			items: 3,
			loop: true,
			nav: true,
			dots: false,
			autoplayHoverPause: true,
			autoplay: true,
			margin: 30,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				700: {
					items: 1,
					nav: true,
				},
				1000: {
					items: 3,
					nav: true,
					loop: true,
				}
			}
		});


		// portfolio

		$(".portfolio_filter li").on('click', function () {
			$(".portfolio_filter li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');

			$(".portfolio_list").isotope({
				filter: selector,
			});
		});
		$(".portfolio_list").isotope();

		//   magnific gallery

		$(".large_image").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			}
		});

		// trusted partners area

		$(".logo_carousel").owlCarousel({
			items: 5,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
			margin: 30,
			responsiveClass: true,
			responsive: {
				0: {
					items: 3,
					nav: false,
				},
				700: {
					items: 5,
					nav: false,
				},
				1000: {
					items: 5,
					nav: false,
					loop: true,
				}
			}
		});

		// sticky header
		$(".header_area").sticky({
			topSpacing: 0
		});

		// smooth scroll

		$('.smooth_menu a').on("click", function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});

		// wow 

		new WOW().init();

		// scroll to top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back-to-top').fadeIn('slow');
			} else {
				$('.back-to-top').fadeOut('slow');
			}
		});
		$('.back-to-top').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 1500, 'easeInOutExpo');
			return false;
		});


		// responsive menu

		$("ul#navigation").slicknav({
			prependTo: ".responsive_menu_wrap"
		});

		// -- End work -- //

	});
	// preloader
	jQuery(window).load(function () {
		$('.spinner').fadeOut();
		$('.eastern_group_preloader_wrap').delay(450).fadeOut('slow');
	});

}(jQuery));