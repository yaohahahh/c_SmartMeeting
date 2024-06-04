

var boxBody = {
		
	    setHeight:function(num,className){
	    	if(num==""||num==false){
	    		num = 0;
			}else{
				num = num;
			}
			    var winH = window.innerHeight;
			    winH = parseInt(winH)-parseInt(num);
			    $("."+className).css("height",winH);	  
			}
};



$(document).ready(function(){
	boxBody.setHeight(50,"bHeightF");
	boxBody.setHeight(85,"bHeightE");
	
});
$(window).on("resize",function() {
	boxBody.setHeight(50,"bHeightF");
	boxBody.setHeight(85,"bHeightE");
});


