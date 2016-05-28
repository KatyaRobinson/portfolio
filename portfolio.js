$(document).ready(function(){

	$('span.nav-btn').click(function(){
	$("ul.nav").slideToggle();
});
	$(window).resize(function(){
		$("ul.nav").removeAttr("style");
	})
	
	$("ul.nav > li").click(function(){
		if ($(window).width() < 680){
		$("ul.nav").slideUp();
		}	
	})
	$("#web-dev-love").hide();
});