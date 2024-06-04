
function getParam(name) {
  　　  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
   　　 var r = window.location.search.substr(1).match(reg);
   　　 if(r != null) return decodeURIComponent(r[2]);
    　　return null;
}



function getDate(){
	var myDate = new Date();
	var month = myDate.getMonth()+1;
	if(month<10){
		month =  "0"+month
	}
	var day = myDate.getDate();
	if(day<10){
		day =  "0"+day
	}
	return myDate.getFullYear()+"-"+month+"-"+day;
}


function getTime(){

    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
                

    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
                

    h=check(h);
    m=check(m);
    s=check(s);
    

    var weekIndex = time.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[weekIndex];
    return year+"年"+month+"月"+day+"日    "+h+":"+m+":"+s+"  "+week;
}


function check(i){
		if(i<10){
       i="0"+i;
    }
    return i;
}



function getTime2(){

    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var day=time.getDate();
                

    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
                

    h=check(h);
    m=check(m);
    s=check(s);
    

    var weekIndex = time.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[weekIndex];
    return year+"-"+month+"-"+day+" "+h+":"+m;
}


function compareDate(date1,date2){
    var start_time = new Date(date1.replaceAll("-", "/"));
		var end_time = new Date(date2.replaceAll("-", "/"));
		if(start_time >= end_time) {
        return false;
    }
		return true;
}


function GoHome(){
    window.parent.gohome();
}