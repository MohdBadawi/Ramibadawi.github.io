$(window).scroll(function(){
	if ($(document).scrollTop() > 50) {
		// $('.home-menu').addClass("shrink")
		$('.home-menu').css("background", "#2d3e50"); 

		} else {
			$('.home-menu').css("background", "rgba(45, 62, 80, 0.2)");
		}
});

// (45, 62, 80, 0.3);