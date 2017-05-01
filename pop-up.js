<script>
	$('.data-action').on('click', function() {
	    var type = $(this).data('action');
	    openModal(type);
	});
	$('.popUp__modal').on('click', function(e) {
	    var type = $(this).parents('.popUp').data('type');
	    var target = $(e.target);
	    if (!target.parents().hasClass('popUp__window') && !target.hasClass('popUp__window')) {
	        closeModal(type);
	    }
	});
	$('.popUp__window__close').on('click', function() {
	    var type = $(this).parents('.popUp').data('type');
	    closeModal(type);
	});

	function openModal(type) {
	    var modal = $('.popUp[data-type="' + type + '"]');
	    modal.find('.popUp__modal, .popUp__window').fadeIn('fast');
	}

	function closeModal(type) {
	    var modal = $('.popUp[data-type="' + type + '"]');
	    modal.find('.popUp__modal, .popUp__window').fadeOut('fast');
	}
	 // close pop-up ESC
	$(document).keyup(function(e) {
	    if (e.keyCode == 27) {
	        $('.popUp__modal, .popUp__window').fadeOut('fast');
	    }
	});
</script>
<style>
	.popUp__title {
		margin-bottom: 20px;
		text-align: center;
		font-size: 24px;
		color: #009ed2
	}

	.popUp__modal {
		position: fixed;
		background: #7B8999;
		background: rgba(0, 31, 63, 0.5);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: none;
		cursor: pointer;
		z-index: 99
	}

	.popUp__window {
		position: absolute;
		background: #fff;
		top: 50%;
		left: 0;
		right: 0;
		margin: auto;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		cursor: default;
		display: none;
		z-index: 100;
		padding: 20px;
		border: 2px solid #6ec5e1;
		border-radius: 10px;
		background-color: #f0f3f6;
		box-shadow: 0px 2px 2px 0px rgba(5, 6, 6, 0.02)
	}

	.popUp__window__close {
		position: absolute;
		right: -25px;
		top: -25px;
		color: #ff5722;
		cursor: pointer;
		z-index: 101
	}

	.popUp__window_feedback {
		width: 500px
	}

	.popUp__window_order {
		width: 270px
	}

	.popUp__window_favorite,
	.popUp__window_watch-price {
		max-width: 500px;
	}

	.popUp__window_quick {
		width: 500px
	}

	.popUp__window_comment {
		width: 390px;
		height: 100px
	}

	.popUp__window_delete {
		width: 500px
	}
</style>
<!-- popup -->
<div class="popUp popUp_watch-price" data-type="watch-price" data-subcribe-success="false">
	<div class="popUp__modal" style="display: block;">
		<div class="popUp__window popUp__window_watch-price" style="display: block;">
			<p class="popUp__title">Сдедить за ценой</p>
			<div class="popUp__window__close"><i class="fa fa-times fa-2x"></i></div>
		</div>
	</div>
</div>
<!-- call -->
<a href="javascript:void(0)" class="data-action" data-action="watch-price">
</a>
