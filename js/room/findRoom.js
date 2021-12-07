var meetingJsonArray = window.parent.meetingJsonArray
var employeeJsonArray = window.parent.employeeJsonArray;
$(function (){
    //页面被加载完成后，立即会被执行的操作
    //获取会议信息列表，每一个部门对象生成遗憾tr存放在会议表格
    for(var i=0; i<meetingJsonArray.length; i++) {
        var meeting = meetingJsonArray[i];
        var trStr = "<tr>" +
            "<td>"+ meeting.name+"</td>" +
            "<td>"+ meeting.start_time+ "</td>" +
            "<td>"+ meeting.end_time+"</td>" +
            "<td>"+ meeting.mper+ "</td>" +
            "<td>"+ meeting.remark+ "</td>" +
            "</tr>";
        $("#findRoom").append(trStr);
    }
})

function searchMeeting(){
    var meeting_name = $("#meetingName").val();
    var per_name = $("#pername").val();
    $("#findRoom").html("");

    for (var i=0; i<meetingJsonArray.length; i++) {
        var meeting = meetingJsonArray[i];
        if(meeting != undefined) {
            var isShow = false;
            if(meeting_name!="" || per_name !="") {
                //判断当前会议是否满足过滤条件
                if(meeting_name!="" && per_name ==""){
                    if(meeting.name.indexOf(meeting_name)!=-1){
                        isShow = true;
                    }
                }else if(meeting_name=="" && per_name !=""){
                    if(meeting.mper.indexOf(per_name)!=-1){
                        isShow = true;
                    }
                }else{
                    if(meeting.name.indexOf(meeting_name)!=-1 && meeting.mper.indexOf(per_name)!=-1){
                        isShow = true;
                    }
                }
            }else{
                isShow = true;
            }
            if(isShow){
                var trStr = "<tr>" +
                    "<td>"+ meeting.name+"</td>" +
                    "<td>"+ meeting.start_time+ "</td>" +
                    "<td>"+ meeting.end_time+"</td>" +
                    "<td>"+ meeting.mper+ "</td>" +
                    "<td>"+ meeting.remark+ "</td>" +
                    "</tr>";
                $("#findRoom").append(trStr);
            }
        }
    }
}