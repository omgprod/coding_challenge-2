$(document).ready(function() {
	// Slow fade in of the recent projects section
	$('.recent-projects ul, .recent-projects div').fadeIn(4000);

	// Parallax effect makes the recent projects' elements move to the opposite direction from the cursor
	$(window).mousemove(function(e) {
		var change;
		var xPos = e.clientX;
		var yPos = e.clientY;
		var left = change * 20;
		var xPos = xPos * 2;
		var yPos = yPos * 2;

		$('.one').css({
			'bottom': (0 + (yPos / 70)) + 'px', 
			'right': (0 + (xPos / 70)) + 'px'
		});
		$('.triangle').css({
			'top': (0 - (yPos / 80)) + 'px', 
			'left': (0 - (xPos / 80)) + 'px'
		});
		$('.circle1').css({
			'bottom': (0 + (yPos / 80)) + 'px', 
			'left': (0 - (xPos / 80)) + 'px'
		});
		$('.rectangle').css({
			'top': (0 + (yPos / 40)) + 'px', 
			'right': (0 + (xPos / 40)) + 'px'
		});
		$('.circle2').css({
			'top': (0 - (yPos / 80)) + 'px', 
			'right': (32 + (xPos / 80)) + 'px'
		});
		$('.line').css({
			'bottom': (144 + (yPos / 70)) + 'px', 
			'right': (96 + (xPos / 70)) + 'px'
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

	// $('.page-title').fadeIn(1500);

	// Get Medium posts
	$(function() {
		var data = {rss_url: 'https://medium.com/feed/@tosfan4ever'};

		$.get('https://api.rss2json.com/v1/api.json', data, function(response) {
			if(response.status == 'ok') {
				console.log(response);
				$.each(response.items, function(k, item) {
					// $('<div></div>').appendTo('.medium-articles').addClass('article');
					var categories = item.categories;
					if(categories.length < 2) {
						$('response.items').remove();
						// return false;
					} else {
						$('<h3 class="medium-title">' + item.title + '</h3>').appendTo('.medium-articles');
						$('<p class="medium-author">By ' + item.author + '</p>').appendTo('.medium-articles');
						var yourString = item.description.replace(/<img[^>]*>/g,""); // Replace with your string
						var maxLength = 120; // Maximum number of characters to extract
						var trimmedString = yourString.substr(0, maxLength); // Trim the string to the maximum length
						trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))); // Re-trim if we are in the middle of a word
						$('<p class="medium-string">' + trimmedString + '...</p>').appendTo('.medium-articles');
						$('<p class="medium-date">' + item.pubDate + '</p>').appendTo('.medium-articles');
					}
					// var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
					// var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
					// var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
					// var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
					// var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
					// $('<div class="medium-pic"><img src="' + src + '" width="360px" height="240px"></div>').appendTo('.medium-article');
				});
			}
		});
	});
});