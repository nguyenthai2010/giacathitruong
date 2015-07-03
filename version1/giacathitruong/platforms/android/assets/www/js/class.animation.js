// JavaScript Document
var AnimObj=(function(){
	function init()
	{
		select_local();
		select_other_local();
		set_css();
		$('.block_intro .insite2 .block2 ul.list_item li a').click(function(){
			goto_home();	
		});
	}
	function set_css()
	{
		$('.sub_seting .zone_setting .content_set').css({'height':$(window).height()});	
		$('#home').css({'opacity':0});
		$('.loading').css({'width':$(window).width(),'height':$(window).height()});
	}
	function select_local()
	{
		$('.header ul.list_header li a#select').click(function(){
			$('.header ul.list_header li .box_menu').css('display','block').animate({'opacity':1},500);
		});
	}
	function select_other_local()
	{
		$('.header ul.list_header li .box_menu ul.list_item li a').click(function(){
			var text=$(this).html();
			$('.header ul.list_header li a span#name').html(text);
			$('.header ul.list_header li .box_menu').animate({'opacity':0},500,function(){
				$('.header ul.list_header li .box_menu').css('display','none');	
			});	
		});
	}
	/****/
	function goto_home()
	{
		$('#intro').css('display','none');	
		$('#home').css('display','block').animate({'opacity':1},1000);
	}
	
	/*************************************/
	function unselect_setting()
	{
		$('.sub_seting .zone_setting .header_set').click(function(){
			undisplay_sub();	
		});	
	}
	function select_setting()
	{
		$('.header ul.list_header li').click(function(){
			display_sub();
		});	
	}
	function undisplay_sub()
	{
		$('.sub_seting').animate({'left':-40+'%'},500,function(){
			$('.sub_seting').css('display','none');	
		});
	}
	function display_sub()
	{
		$('.sub_seting').css('display','block').animate({'left':0},500);
	}
	return{
		init:init,
		select_setting:select_setting
	}
})();
$(document).ready(function(e) {
	AnimObj.init();
});