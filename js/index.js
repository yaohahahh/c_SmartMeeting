$(function(){
	
	//每1秒刷新一次时间
    setInterval(function(){
    	$("#nowTime").html(getTime());
    },1000);
    
    /**********以下部分是菜单的一二级的相关动态样式**********/
    //活动下的一级菜单的高度是自动填充的
	$(".active").css("height","auto");
	//设置活动下的一级菜单下的二级菜单的背景颜色
	$(".active").children(".sub-menu").css("background","#FFFFFF");
	//设置活动的二级菜单的背景颜色及字体颜色
	$(".subactive").parent().css("background","#FFFFFF").css("color","#FFFFFF");
	
	//当点击一级菜单的超链接时，触发的事件
	$(".menu>li>a").click(function(){
		//获取当前点击的一级菜单下的二级菜单的显示状态
		var display = $(this).siblings(".sub-menu").css("display");
		//如果当前点击的一级菜单下的二级菜单时隐藏的
		if(display=="none"){
			//则让二级菜单显示
			$(this).siblings(".sub-menu").show();
		}else{
			//否则让二级菜单隐藏
			$(this).siblings(".sub-menu").hide();
		}
		//设置当前一级菜单的高度为自动适应
		$(this).parent().css("height","auto");
		//设置当前点击的一级菜单下的二级菜单的背景颜色
		$(this).siblings(".sub-menu").css("background","#FFFFFF");
		$(this).css("text-decoration","none");
	});
	//当点击二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").click(function(){
		// $(this).css("text-decoration","none");
		$(this).parent().css("background","#C4C4C4").css("color","#FFFFFF");
	});
	//当鼠标移入二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").mouseover(function(){
		// $(this).parent().css("background","#FFFFFF").css("color","#FFFFFF");
		$(this).css("text-decoration","none");
	});
	//当鼠标移出二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").mouseout(function(){
		if(!$(this).hasClass("subactive")){
			$(this).parent().css("background","#FFFFFF ");
		}
	});
	/**********以上部分是菜单的一二级的相关动态样式**********/
	syncUser();
});


function syncUser(){
	$("#loginSpan").html("欢迎登录,"+loginUser.name);
}

