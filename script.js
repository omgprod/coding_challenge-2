$(document).ready(function() {
	// 
	var currentX = '';
	var currentY = '';
	var movementConstant = .015;

	$('.recent-projects').mousemove(function(e) {
		if(currentX == '') currentX = e.pageX;
		var xdiff = e.pageX - currentX;
		currentX = e.pageX;

		if(currentY == '') currentY = e.pageY;
		var ydiff = e.pageY - currentY;
		currentY = e.pageY;

		$('.recent-projects').each(function(i, el) {
			var movement = (i + 1) * (xdiff * movementConstant);
			var movementy = (i + 1) * (ydiff * movementConstant);
			var newX = $(el).position().left + movement;
			var newY = $(el).position().top + movementy;
			$(el).css('left', newX + 'px');
			$(el).css('top', newY + 'px');
		});
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
		$('html, body').animate({scrollTop: aTag.offset().top}, 1500);
	}

	$('.projects__link').click(function() {
		scrollToAnchor('projects');
	});

	$('.about-me__link').click(function() {
		scrollToAnchor('about-me');
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

	// $('.page-title').fadeIn(1500);

	// Get Medium posts
	// https://codepen.io/jasonm4130/pen/vZYbQx?editors=1000
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