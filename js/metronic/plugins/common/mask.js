function ajaxLoading(msg,msgMaginTop){

	var default_msg = '正在处理，请稍后。。。';

	var default_msgMaginTop= -45;
	var _msg = '';
	var _msgMaginTop=0;

	if (msg == 'undefined') {
		_msg = default_msg;
	} else {
		_msg = msg;
	}	
	if (msgMaginTop == 'undefined') {
		_msgMaginTop = default_msgMaginTop;
	} else {
		_msgMaginTop = msgMaginTop;
	}	

	$("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:"100%"}).appendTo("body");
	$("<div class=\"datagrid-mask-msg\"><img src=\" /postbar/static/css/default/images/pagination_loading.gif \" width='50px' height='50px'/></div>").html(_msg).appendTo("body").css({display:"block",left:($(document.body).outerWidth(true) ) / 2,top:(document.body.offsetHeight + _msgMaginTop) / 2});
}
 
function ajaxLoadEnd(){
	$(".datagrid-mask").remove();
	$(".datagrid-mask-msg").remove();
}
