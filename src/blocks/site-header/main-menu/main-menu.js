$(document).ready(function() {
	$('.main-menu').onePageNav({
		scrollThreshold: 0.2, 
		scrollOffset: 60
	});  
});

$(document).ready(function () {
	mainNav();
});

$(window).scroll(function () {
	mainNav();
});

if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
	function mainNav() {
		var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		if (top > 40) $('.main-menu').stop().animate({"top": '0'});

		else $('.main-menu').stop().animate({"top": '-60'});
	}
}

if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
	function mainNav() {
		var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		if (top > 40) $('.main-menu').stop().animate({"top": '0'});

		else $('.main-menu').stop().animate({"top": '-120'});
	}
}
