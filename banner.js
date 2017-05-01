$(document).ready(function(){

function showBanner(){

		$(".baner_wrapper").fadeIn();

		sessionStorage.setItem('visit', 'true');
}

if (sessionStorage.getItem("visit") === null || sessionStorage.getItem("visit")=== false) {

setTimeout(showBanner, 4000);
}


$(".baner_wrapper").click(function(){
    $(this).fadeOut();
});
$(".close_btn").on("click", function(){
	event.preventDefault();
	event.stopPropagation();
	$('.baner_wrapper').fadeOut();
});
});
