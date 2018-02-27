$(document).ready(function() {
	$('.recent-projects').fadeIn(2000);

	const scrollToAnchor = (aid) => {
		const aTag = $('#' + aid);
		$('html, body').animate({scrollTop: aTag.offset().top}, 1500);
	}

	$('.projects__link').click(function() {
		scrollToAnchor('projects');
	});

	$('.about-me__link').click(function() {
		scrollToAnchor('about-me');
	});
});