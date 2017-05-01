        function changeImg(image) {
          var that = image;
          var mainImg = that.data('main');
          var bigImg = that.data('big');
          $('.collect_big > img').attr('src', mainImg);
          $('.collect_big').attr('href', bigImg);
        }
        $('.collect_thumb').on('click', function() {
          changeImg($(this));
        });
