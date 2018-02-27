$(document).ready(function() {

	// Show .recent projects in header
	$('.recent-projects').fadeIn(2000);

	// Show the current page at nav
	const currentUrl = window.location.href;
	const activePage = currentUrl;

	$('nav a').each(function() {
		const linkPage = this.href;

		if(activePage == linkPage) {
			$(this).closest('a').addClass('active');
		}
	});

	// Scroll to the anchor elements slower
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