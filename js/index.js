$(function(){

	$(".left .handle").click(function(){
		$(".left").animate({
			left: 0
		});
		$(".right .handle").hide();
		// $(".left .close").show();

	});

	$(".left .close").click(function(){
		$(".left").animate({
			left: '-100vw'
		});
		$(".right .handle").show();
		// $(".left .close").hide();
	});


	$(".right .handle").click(function(){
		$(".right").animate({
			left: 0
		});
		$(".left .handle").hide();
		// $(".right .close").show();

	});

	$(".right .close").click(function(){
		$(".right").animate({
			left: '100vw'
		});
		$(".left .handle").show();
		// $(".right .close").hide();
	});

})