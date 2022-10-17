$(document).ready(function () {
	$('.header-bar').on('click', function (e) {
		$('.header-navbar').addClass('active');
		$('body').addClass('stop-scrolling');
	});

	$('.header-navbar').on('click', function (e) {
		if ($(e.target).closest('.header-navbar ul').length <= 0) {
			$('.header-navbar').removeClass('active');
			$('body').removeClass('stop-scrolling');
		}
	});

	$('.product-tab a').on('click', function (e) {
		const tab_target = $(this).attr('tab-target');
		$('.product-list').removeClass('active');
		$('.product-tab a').removeClass('active');
		$(this).addClass('active');
		$(tab_target).addClass('active');
	});

	$('.client-say-slick').slick({
		dots: true,
		arrows: false, 
	});

	$('.site-footer-nav_heading').on('click', function (e) {
		const footer_list = $('.site-footer-nav_heading').next();
		footer_list.removeClass('active');
		const this_list = $(this).next();
		this_list.addClass('active');
	});
});
