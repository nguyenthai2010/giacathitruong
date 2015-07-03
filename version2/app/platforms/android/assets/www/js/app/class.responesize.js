// JavaScript Document
var Responsize = (function() {
	// PARAMATER
	var setting = {
		font	:	13,
		w		:	360,
		h		:	615
	}
	
	// INIT
	function init(){
		respone();
		$(window).resize(function(e) {
			respone();
		});
	}

	// RESPONE
	function respone(){
        //return ;

		var h = $(window).height();	
		setting.font = (h*13)/setting.h;
		$('body').css('font-size', setting.font + 'px' );
	}
	
	// FUNCTION
	// RETURN
	return {
		init:init,
		respone:respone
	}
})();		
