// JavaScript Document
var homepage = (function() {
    //PARAMATER
    var tl = null;

	//INIT
	function init(){
        initevent();
	}

    function initevent(){
        $( ".listproduct section" ).click(function() {
            homepage.close();

        });
    }

    //FUNCTIONS
    function open(){
        tl = new TimelineMax({});
        tl.set($('.homepage'),{css:{'display':'block'}})
            .to( [$('.listproduct section:eq(0)'), $('.listproduct section:eq(2)')], 0.5, {css:{x:'0'}})
            .to( [$('.listproduct section:eq(1)'), $('.listproduct section:eq(3)')], 0.5, {css:{x:'0'}}, '-=0.5')
    }

    function close(){
        var w = $(window).width();
        tl = new TimelineMax({onComplete:closecomplete});
        tl.to( [$('.listproduct section:eq(0)'), $('.listproduct section:eq(2)')], 0.5, {css:{x:-w}})
            .to( [$('.listproduct section:eq(1)'), $('.listproduct section:eq(3)')], 0.5, {css:{x:w}}, '-=0.5')
    }

    function closecomplete(){
        $('.homepage').css('display','none');
        listpage.open();
    }

    //RETURN
	return {
		init:init,
        open:open,
        close:close
	}
})();		
