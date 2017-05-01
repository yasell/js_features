	$(window).scroll(function() {

		if($(window).scrollTop()>50){
			$('#up').fadeIn(300);
		}else{
			$('#up').fadeOut(300);
		}
		if($(window).scrollTop()>0){
			$('.header-top').addClass('fix');
		}else{
			$('.header-top').removeClass('fix');
		}
	});
