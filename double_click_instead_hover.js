        $('a').on('click',function(e){
            e.preventDefault();
            var that = $(this);
            var linkHref = that.attr('href');
            if (linkHref && that.hasClass('onHover')) {
                location.href = linkHref;
                return false;
            }
            that.toggleClass('onHover');
        });
