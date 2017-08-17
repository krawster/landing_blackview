$(document).on("scroll", function(){
	var scroll_y = $(window).scrollTop() / 2;

	$('.site-header').css({
		'background-position' : '50% -' + scroll_y + 'px'
	});
});