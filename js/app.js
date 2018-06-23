console.log('Can I kick it?');

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
