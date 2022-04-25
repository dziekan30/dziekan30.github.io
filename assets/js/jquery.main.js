// page init
jQuery(function () {
	"use strict";

	initbackTop();
	initAddClass();
	initLightbox();
	initGoogleMap();
	initAddClass2();
	initProgressBar();
	initSlickSlider();
	initContactForm();
	initVegasSlider();
	initStickyHeader();
	initStyleChanger();
	initTextRotator2();


	jQuery(window).on('load', function () {
		"use strict";

		initIsoTop();
		initPreLoader();
	});




	// Add Class  init
	function initAddClass() {
		"use strict";

		jQuery('.nav-opener').on("click", function (e) {
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
	}
	function initAddClass2() {
		$('#js-navbar-menu').onePageNav({
			currentClass: 'active',
			scrollThreshold: 0.2,
			scrollSpeed: 1000

		});
		$('#js-navbar-menu a[href^="#"]').on('click', function (event) {
			event.preventDefault();
		});
	}

	// IsoTop init
	function initIsoTop() {
		"use strict";

		var isotopeHolder = jQuery('.portfolio-holder'),
			win = jQuery(window);
		jQuery('.filter-list a').click(function (e) {
			e.preventDefault();

			jQuery('.filter-list li').removeClass('active');
			jQuery(this).parent('li').addClass('active');
			var selector = jQuery(this).attr('data-filter');
			isotopeHolder.isotope({ filter: selector });
		});
		jQuery('.portfolio-holder').isotope({
			itemSelector: '.item',
			transitionDuration: '0.6s',
			masonry: {
				columnWidth: '.item'
			}
		});
	}

	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.service-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 3,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 4000,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 2,
						infinite: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						infinite: true
					}
				}
			]
		});
		jQuery('.testimonail-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			autoplaySpeed: 4000
		});
	}

	// backtop init
	function initbackTop() {
		"use strict";

		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('active');
			} else {
				jQuerybackToTop.removeClass('active');
			}
		});
		jQuerybackToTop.on('click', function (e) {
			jQuery("html, body").animate({ scrollTop: 0 }, 900);
		});
	}

	// PreLoader init
	function initPreLoader() {
		"use strict";

		jQuery('#loader').delay(1000).fadeOut();
	}

	// Progress Bar init
	function initProgressBar() {
		"use strict";

		if (jQuery(".progress-bar").length != '') {
			var waypoint = new Waypoint({
				element: document.getElementById('progress-bar'),
				handler: function (direction) {
					console.log('Scrolled to waypoint!');
					jQuery('.progress-bar li').each(function () {
						var widthBar = jQuery(this).find('.over').attr('data-percent');
						jQuery(this).find('.over').animate({
							'width': widthBar
						});
					});
				},
				offset: '80%'
			});
		}
	}

	// GoogleMap init
	function initGoogleMap() {
		"use strict";

		jQuery('.map').googleMapAPI({
			marker: 'assets/images/icon.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}

	/* pie chart */
	(function ($) {
		"use strict";

		$('.first.circle').circleProgress({
			value: 0.95
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
		});

		$('.second.circle').circleProgress({
			value: 0.8
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
		});
		$('.third.circle').circleProgress({
			value: 0.75
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
		});
		$('.four.circle').circleProgress({
			value: 0.6
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
		});

	})(jQuery);

	// modal popup init
	function initLightbox() {
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
	}

	function initContactForm() {
		"use strict";

		$("#btnform").click(function () {
			var url = 'process.php';
			var form_data = {
				txtname: $('#txtname').val(),
				txtemail: $('#txtemail').val(),
				txtmessage: $('#txtmessage').val(),
				ajax: '1'
			};
			$.ajax({
				url: url,
				type: 'POST',
				async: false,
				data: form_data,
				dataType: 'json',
				success: function (data) {
					if (!data.success) {
						if (data.errors.name) {
							$("#txtname").addClass("error");
						}
						if (data.errors.email) {
							$("#txtemail").addClass("error");
						}
						if (data.errors.message) {
							$("#txtmessage").addClass("error");
						}
					}
					else {
						$('#success').show();
						$('#success').html(data.message);
					}
				}
			});
		});
	}

	// sticky header init
	function initStickyHeader() {
		"use strict";

		var win = jQuery(window),
			stickyClass = 'fixed-position';

		jQuery('#header').each(function () {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 0;
			var flag = true;

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag) {
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}

	// style changer
	function initStyleChanger() {
		"use strict";

		var element = jQuery('#style-changer');

		if (element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function (data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}

	// Video Embed
	function initVegasSlider() {
		jQuery("#bgvid").vegas({
			slides: [
				{
					src: 'assets/images/video.jpg',
					video: {
						src: [
							'assets/video/video.3gp',
							// 'assets/video/video.mp4',
							'assets/video/video.webm'
						],
						loop: true,
						timer: false,
						mute: true
					}
				}
			]
		});
	}

	// TextRotator2 init
	function initTextRotator2() {
		"use strict";

		jQuery('#rotating2').textillate({
			selector: '.rotating-hold',

			// enable looping
			loop: true,

			// sets the minimum display time for each text before it is replaced
			minDisplayTime: 2000,

			// sets the initial delay before starting the animation
			// (note that depending on the in effect you may need to manually apply
			// visibility: hidden to the element before running this plugin)
			initialDelay: 0,

			// set whether or not to automatically start animating
			autoStart: true,

			// custom set of 'in' effects. This effects whether or not the
			// character is shown/hidden before or after an animation
			inEffects: [],

			// custom set of 'out' effects
			outEffects: ['hinge'],

			// in animation settings
			in: {
				// set the effect name
				effect: 'fadeInLeftBig',

				// set the delay factor applied to each consecutive character
				delayScale: 1.5,

				// set the delay between each character
				delay: 50,

				// set to true to animate all the characters at the same time
				sync: false,

				// randomize the character sequence
				// (note that shuffle doesn't make sense with sync = true)
				shuffle: false,

				// reverse the character sequence
				// (note that reverse doesn't make sense with sync = true)
				reverse: false
			},
			out: {
				effect: 'hinge',
				delayScale: 1.5,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: false,
			},
			type: 'char'
		});
	}

});