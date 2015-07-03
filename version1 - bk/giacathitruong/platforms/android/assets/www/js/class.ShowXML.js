// JavaScript Document
var xmlData = null;
var array_danhmuc = ['Tất cả','Nông sản','Thực phẩm','Năng Lượng','Mặt hàng khác'];
var showXMLFile = function(value) {	
	var pathUrl = 'http://taichinh-24h.com/giacathitruong2.php';//1. db/giacathitruong.xml || 2. http://taichinh-24h.com/giacathitruong.php 
	//pathUrl = 'db/giacathitruong.xml';
	$.ajax({
		url: pathUrl, 
		cache: false})
		.done(function( data ) {
			xmlData = data;
			writeFileXMLOffline();
			$('.loading').css('display','none');
		});// endajax		
}

function diplayPrice(value){
	var listprices = '';
	$('#listprices').html(listprices);//insert a table 
	var jData = $(xmlData );//need -> du lieu dau vao
	var ratelist = jData.find( "ratelist");//trỏ đến name=ratelist(parent)
	var updated = ratelist.attr('updated'); //return date
	$('#update').html(updated);//insert date in file xml
	
	listprices += '<div class="datetime" style="opacity:0; height:0px; display:none;">'+ updated +'</div>';
	//loc theo thanh pho
	listprices += '<div  class="main contentPrice_'+ value +'" id="content' + value + '"><table width="100%" cellpadding="0" cellspacing="0" border="0" class="main">';
	
	var str_compare = value > 0 ? array_danhmuc[value]:'';

	
	
	$stt = 0;
	ratelist.children().each(function(index,element){//loc lay ten thanh pho - bao gom index=0, index=1, element: noi dung cap con 
		//select_name();
		
		$item=$(this);//need
		$stt++;
		$name=$item.attr('name');
		$sellbefore=$item.attr('sellbefore');
		$sell=$item.attr('sell');
		$howprice=$item.attr('howprice');
		$cat=$item.attr('cat');
		
		if( (str_compare != '' && $cat == str_compare) || str_compare == ''){
			listprices +='<tr class="row_content"><td height="35" align="center" valign="top">'+$stt+'</td><td height="35" align="left" valign="top" class="name_select">'+$name+'</td><td height="35" align="right" valign="top">'+$sell+'</td><td width="90" height="35" align="right" valign="top">'+$cat+'</td></tr>';	
		} 
			
					
	});//end name thanh pho
	listprices += '</table></div>';	
	return listprices;
}
//****************************************Check offline**************************************


//check connection
function checkConnection() {
	if(DEMO)
	 return true;
	 
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 1;//'Unknown connection'
    states[Connection.ETHERNET] = 2;//'Ethernet connection'
    states[Connection.WIFI]     = 3;//'WiFi connection'
    states[Connection.CELL_2G]  = 4;//'Cell 2G connection'
    states[Connection.CELL_3G]  = 5;//'Cell 3G connection'
    states[Connection.CELL_4G]  = 6;//'Cell 4G connection'
    states[Connection.CELL]     = 7;//'Cell generic connection'
    states[Connection.NONE]     = 8;//'No network connection'
    if(states[networkState] == 1 || states[networkState] == 8)
	{
		return false;
	}
	else
	{
		return true;
	}
}
// *** read offline file
var readOfflineFile = function() {
	if(DEMO) return;
	
	fileRead.run('data.txt', '#priceTemp');
}

function displayPriceOffile(value){
	$('#listprices').html( $('#priceTemp .contentPrice_' + value).html());
	$('#update').html($('#priceTemp .datetime').html());
}
// *** write file XML 
var writeFileXMLOffline = function() {
	if(DEMO) return;
	if(checkConnection()){
		var strWrite = '';
		strWrite = diplayPrice(1);
		strWrite = strWrite + diplayPrice(0);
		strWrite = strWrite + diplayPrice(2);
		strWrite = strWrite + diplayPrice(3);
		strWrite = strWrite + diplayPrice(4);
		fileWrite.run('data.txt', strWrite);		
	}	
}
/*search*/
	function anim_search()
	{
		$('#search').keyup(function(e) {
			var searchterm = $(this).val();
			$("table.main tr").each(function(){
				var item1=(normalize($(this).children('td.name_select').text()));
				if((item1).toUpperCase().indexOf(searchterm.toUpperCase()) != -1){
					$(this).show();	
					$('table.main tr.row_title').attr('style',"");
				}
				else{
					$(this).hide();
				}
			});
		});
		$('.header ul.list_header li .outinput img').click(function(e) {
			var searchterm = $('#search').val();
			$("table.main tr").each(function(){
				var item1=(normalize($(this).children('td.name_select').text()));
				if((item1).toUpperCase().indexOf(searchterm.toUpperCase()) != -1){
					$(this).show();	
					$('table.main tr.row_title').attr('style',"")	
				}
				else{
					$(this).hide();
				}
			});
		});
	}
	
// file encoding must be UTF-8!
//***********************************end check offline*************************

function init()
{
	anim_search();
	$('.processPriceCity,.header ul.list_header li .box_menu ul.list_item li a').click(function(){
		value_select=$(this).attr('select');
		select_text(value_select);
		//$('#listprices').html(diplayPrice(value_select));
		if(checkConnection()){
			$('#listprices').html(diplayPrice(value_select));
			
		}
		else{
			displayPriceOffile(value_select);
		}		
		//displayPriceOffile(value_select);
	});		
	runGiacathitruong();
}
function select_text(value){
	$('.header ul.list_header li a span#name').html(array_danhmuc[value]);
}
// *** PhoneGap functions:
var onLoad = function() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

var onDeviceReady = function() {
	init();
}

//show data
function runGiacathitruong(){
	var pathUrl = '';
	showXMLFile();
	if(checkConnection()){
		showXMLFile();
	}
	else{
		$('.loading').css('display','none');
		readOfflineFile();
		setTimeout('runGiacathitruong();', 5000);
	}
}

$(document).ready(function(e) {
	runGiacathitruong();
	if(DEMO) init();
});
