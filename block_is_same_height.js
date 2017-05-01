     if ($('.working__content').size() > 0) {
        var heightBlock = 0;
        $('.working__content').each(function() {
            if ($(this).height() > heightBlock) {
                heightBlock = $(this).height();
            }
        });
        $('.working__content').each(function() {
            $(this).height(heightBlock);
        });
    }


function sameHeight (elem) {
  var heightBlock = 0;
  var that = elem;
   if (that.size() > 0 && !that.index()) {

      that.each(function() {
          if ($(this).height() > heightBlock) {
              heightBlock = $(this).height();
          }
      });
      that.each(function() {
          $(this).height(heightBlock);
      });
  }

}

sameHeight ($('.working__content'));
