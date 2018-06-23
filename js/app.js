console.log('Can I kick it?');


$(window).scroll(function() {

    //Hide/Show based on location
    var y = $(this).scrollTop();
    if (y < 150) {
        $('.sample-pane-2').hide();
    }
		else {
				$('.sample-pane-2').fadeIn(200);
    }
});


$(function() {
	// Sample FadeIn Animation
	var media = $('.teanotes-interactive-media');

	$('#toggleFadeIn').on('click', function(event) {
		event.preventDefault();
		toggleFadeIn(media);
	});

	function toggleFadeIn(el) {
		if (el.hasClass('fadeIn')) {
			el.removeClass('fadeIn')
		} else {
			el.addClass('fadeIn');
			setTimeout(function() {
				el.removeClass('fadeIn')
			}, 1000)
		}
	}


})
