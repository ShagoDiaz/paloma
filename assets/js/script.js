
$(document).ready(function(){

	$('#main-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#main-up').slideDown(300);
		} else {
			$('#main-up').slideUp(300);
		}
	});

});