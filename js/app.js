// Create a Scroll Reveal Instance
window.sr = ScrollReveal();

// This is the function that makes the text for the items appear
$(function() {
	$('.im-dot').each(function() {
		var $dropdown = $(this);
		$( $dropdown).click(function(e) {
			e.preventDefault();
			$div = $(".im-dot--meta", $dropdown);
			$div.toggle();
			$(".im-dot--meta").not($div).hide();
			return false;
		});
	});
	$('html').click(function(){
		$(".im-dot--meta").hide();
	});
});

// Fade in animation for Interactive Media elements
var iteractiveMedia = $('.teanotes-interactive-media');

iteractiveMedia.each(function(index, el) {
	sr.reveal(el, {
			opacity: .5,
			viewFactor: .5,
	});
});

// Sequenced animations for Interactive List Items
sr.reveal('.il-list--item', {
	distance: '0',
	duration: 850,
	scale: .6,
}, 550);

// Animation for the floating images of tea cup
sr.reveal('.lid', {
	origin: 'top',
	opacity: .3,
	duration: 2000,
	scale: 1,
	delay: 120,
	viewFactor: .9,
	distance: '90px'
});
sr.reveal('.basket', {
	origin: 'top',
	distance: '30px',
	duration: 1800,
	scale: 1,
	delay: 1,
	viewFactor: .9,
	opacity: .5,
});

sr.reveal('.teanotes-floating-media .im-dots', {
		origin: 'bottom',
		opacity: 0,
		delay: 1400,
		duration: 1800

});
