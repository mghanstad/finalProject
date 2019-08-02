
$(document).ready(function(){
	$("#image").click(function(){
		$(".nav-bar").slideToggle("swing");

	});

	$(window).resize(function(){
	var w = $(window).width();
	var navBar = $(".nav-bar");
	if (w > 320 & navBar.is(":hidden")){
		navBar.removeAttr("style");
	}

	});

});
