function main(){
	/*
	if ($('.ltIE8').length > 0) {
    	var element=$('.ltIE8').first();
    	element.css('left', -1*element.width());
    	$('.ltIE8').animate({
			left: '0',
		}, {
			duration: 2500,
			specialEasing: {
				left: 'easeOutBounce'
    		},
    		complete: function() {
      			$('.ltIE8').effect('highlight', 1000);
    		}
		});
	}
	*/
	if( ($('.ltIE8').length > 0) && (!$.cookie("iePopup")) && (Modernizr.cookies) ){
		$(".ltIE8").dialog({
			buttons:{
				"Upgrade": function(){
					window.top.location="http://google.com/chrome/";
					$.cookie("iePopup", "true", { path: '/', expires:100 });
				},
				"I don't want to": function(){
					$(this).dialog("close");
					$.cookie("iePopup", "true", { path: '/', expires:100 });
				}
			},
			width: 0.4*$(window).width(),
			height: 0.6*$(window).height(),
			modal:true,
		});
	}
}