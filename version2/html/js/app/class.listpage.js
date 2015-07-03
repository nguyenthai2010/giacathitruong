// JavaScript Document
var listpage = (function() {
    //PARAMATER
    var tl = null;

	//INIT
    function init(){
        initevent();
    }

    function initevent(){
        $( ".listpage .ico-menu" ).click(function() {
            close();
        });

        $( ".listgiaca nav section" ).click(function() {
            $('.listgiaca nav section').removeClass('active');
            $(this).addClass('active');
        });

        $(".danhsach").mCustomScrollbar({
            theme:"dark-thick"
        });
    }

    //FUNCTIONS
    function open(){
        tl = new TimelineMax({});
        tl.set($('.listpage'),{css:{'display':'block'}})

    }

    function close(){
        tl = new TimelineMax({});
        tl.set($('.listpage'),{css:{'display':'none'}})

        homepage.open();
    }

    function closecomplete(){
    }

    //RETURN
	return {
		init:init,
        open:open,
        close:close
	}
})();		
