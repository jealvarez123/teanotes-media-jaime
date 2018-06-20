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