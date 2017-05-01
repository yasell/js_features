    $('a[href]').on('click', function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        if($.browser.safari){
            $('body').animate( { scrollTop: destination }, 1000 );
        }else{
            $('html').animate( { scrollTop: destination }, 1000 );
        }
        return false;
    });

// или
$(".product__nav").on("click", "a", function(event) {
	event.preventDefault();

	// scroll
	var el = $(this).attr("href");
	$("body,html").animate({
		scrollTop: $(el).offset().top
	}, 2000);
	return false;
});
