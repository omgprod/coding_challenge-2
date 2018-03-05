$(document).ready(function() {
	// Index page SVG animation
	setTimeout(function() {
		$('.intro__boxes').addClass('animate');
		setTimeout(function() {
			$('.intro__boxes').addClass('no-transitions');
			$('.intro__boxes').addClass('fade-out');
			setTimeout(function() {
				$('.intro__boxes').removeClass('animate');
				setTimeout(function() {
					$('.intro__boxes').removeClass('no-transitions');
					$('.intro__boxes').removeClass('fade-out');
					intro.init();
				}, 10);
			}, 1000);
		}, 25000);
	}, 100);

	// Slow fade in of the recent projects section
	$('.recent-projects ul, .recent-projects svg').fadeIn(5000);

	// Parallax effect makes the recent projects' elements move to the opposite direction from the cursor
	$(window).mousemove(function(e) {
		var change;
		var xPos = e.clientX;
		var yPos = e.clientY;
		var left = change * 20;
		var xPos = xPos * 2;
		var yPos = yPos * 2;

		$('.one').css({
			'bottom': (0 + (yPos / 50)) + 'px', 
			'right': (0 + (xPos / 50)) + 'px'
		});
		$('.triangle').css({
			'top': (0 - (yPos / 40)) + 'px', 
			'left': (0 - (xPos / 30)) + 'px'
		});
		$('.circle1').css({
			'bottom': (0 + (yPos / 30)) + 'px', 
			'left': (0 - (xPos / 30)) + 'px'
		});
		$('.rectangle').css({
			'top': (0 + (yPos / 20)) + 'px', 
			'right': (0 + (xPos / 20)) + 'px'
		});
		$('.circle2').css({
			'top': (0 - (yPos / 30)) + 'px', 
			'right': (32 + (xPos / 30)) + 'px'
		});
		$('.line1').css({
			'bottom': (32 + (yPos / 50)) + 'px', 
			'right': (128 + (xPos / 50)) + 'px'
		});
		$('.line2').css({
			'bottom': (96 + (yPos / 50)) + 'px', 
			'right': (32 + (xPos / 50)) + 'px'
		});
	});

	// Animate menu elements around the recent projects
	$('.in-projects').hover(function() {
		$(this).animate({letterSpacing: '2px'}, 1200);
	},
	function() {
		$(this).animate({letterSpacing: '1px'}, 1200);
	});

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
		$('html, body').animate({scrollTop: aTag.offset().top}, 1200);
	}

	$('.projects__link').click(function() {
		scrollToAnchor('projects');
	});

	$('.about-me__link').click(function() {
		scrollToAnchor('about-me');
	});

	$('.arrow-up').click(function() {
		scrollToAnchor('body');
	});

	// Move elements to the right when hover over menu
	$('.menu').hover(function() {
		$('main').animate({marginLeft: '180px'});
		$('#about-me').animate({marginLeft: '200px'});
	},
	function() {
		$('main').animate({marginLeft: '100px'});
		$('#about-me').animate({marginLeft: '100px'});
	});

	$('#burger').click(function() {
		// Toggle navbar for mobile
		$('.burger-menu').toggle('slow');
		// Change color of the hamburger button
		$('span').toggleClass('white-span');
	});

	// Show the scroll up button
	$(window).scroll(function() {
		if($(this).scrollTop()) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});
});