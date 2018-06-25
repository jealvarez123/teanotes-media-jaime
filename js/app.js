// This is for the scroll fade in
$(window).scroll( function(){
	/* Check the location of each desired element */
	$('.teanotes-interactive-media').each( function(i){
		var bottom_of_object= $(this).position().top + $(this).outerHeight();

		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fade it in */
		if( bottom_of_window > bottom_of_object ){
			$(this).animate({'opacity':'1'},500);
		}
	});
});
// This is the function that makes the text for the items appear
$(function() {
	$('.im-dot-1').on('click', function(event) {
		console.log('it works 1');
		$('.im-dot--meta-1').toggle(function () {
			$("im-dot--meta-1").css({display: "block"});
		}, function () {
			$("im-dot--meta-1").css({display: "none"});
		});
	});
});
$(function() {
	$('.im-dot-2').on('click', function(event) {
		console.log('it works 2');
		$('.im-dot--meta-2').toggle(function () {
			$("im-dot--meta-2").css({display: "block"});
		}, function () {
			$("im-dot--meta-2").css({display: "none"});
		});
	});
});
$(function() {
	$('.im-dot-3').on('click', function(event) {
		console.log('it works 3');
		$('.im-dot--meta-3').toggle(function () {
			$("im-dot--meta-3").css({display: "block"});
		}, function () {
			$("im-dot--meta-3").css({display: "none"});
		});
	});
});
