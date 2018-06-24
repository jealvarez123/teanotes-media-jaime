// This is for the scroll fade in
$(window).scroll( function(){
	/* Check the location of each desired element */
	$('.sample-pane').each( function(i){
		var bottom_of_object= $(this).position().top + $(this).outerHeight();

		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fade it in */
		if( bottom_of_window > bottom_of_object ){
			$(this).animate({'opacity':'1'},1500);
		}
	});
});

// This is the function that makes the text for the items appear
$(function() {
	$('.im-dot').on('click', function(event) {
		console.log('it works');
		$('.im-dot--meta').toggle(function () {
			$("im-dot--meta").css({display: "block"});
		}, function () {
			$("im-dot--meta").css({display: "none"});
		});
	});
})
