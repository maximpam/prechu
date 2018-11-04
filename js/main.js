$(document).ready(function(){
    $('.adaptive__nav').on('click', function(e){
        $('.adaptive__menu').slideToggle(100);
    });

   $(window).resize(function() {		
		if (  $(window).width() > 375 ) {			
			$('.adaptive__menu').removeAttr('style');
		 }
	});//end
});