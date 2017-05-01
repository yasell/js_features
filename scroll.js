var maxHeight = 400;

$(function() {

    $(".dropdown > li").hover(function() {

        var $container = $(this),
            $list = $container.find("ul"),
            $anchor = $container.find("a"),
            height = $list.height() * 1.1, // Снизу должно быть достаточно места
            multiplier = height / maxHeight; // Для ускорения перемещения, если список очень длинный

        // Сохраняем оригинальное значение высоты контейнера, чтобы восстановить его
        $container.data("origHeight", $container.height());

        $anchor.addClass("hover");

        // Выпадающее меню появляется точно под соответствующим пунктом родительского списка
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });

        // Не делаем никаких анимаций, если список короче максимального значения
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }

    }, function() {

        var $el = $(this);

        // Устанавливаем оригинальные настройки
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({
                top: 0
            })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");

    });

    // Добавляем стрелку вниз только к пунктам с подпунктами
    $(".dropdown > li:has('ul')").each(function() {
        $(this).find("a:first").append("<img src='images/down-arrow.png' />");
    });


});
