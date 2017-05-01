if (document.body.clientWidth > 760) {
    $("a[zoom]").fancybox({
		'titleShow' : true,
		'titlePosition' : 'inside',
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'centerOnScroll' : true
	});

}
if (document.body.clientWidth <= 760) {
    $("a[zoom]").on('click', function (e) {
        e.preventDefault();
    });
}
