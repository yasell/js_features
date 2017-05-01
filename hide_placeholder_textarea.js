     $('textarea').on('focus', function() {
         placeholderValue = $(this).attr('placeholder');
         $(this).attr('placeholder', '');
     }).on('blur', function() {
         $(this).attr('placeholder', placeholderValue);
     });
