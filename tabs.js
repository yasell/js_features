    $(".panels .tab").click(function() {
        if (!$(this).hasClass("active")) {
            $(".panels .tab").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn();
        }
    }).eq(0).addClass("active");

<div class="panels">
        <div class="tabs">
            <div class="tab active">Описание</div>
            <div class="tab">Характеристики</div>
        </div>
        <div class="tab_content">
            <div class="tab_item">

            </div>
            <div class="tab_item">

            </div>
        </div>
</div>
