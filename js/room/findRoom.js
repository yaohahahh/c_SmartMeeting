var meetingJsonArray = window.parent.meetingJsonArray;
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
            "<td>"+ meeting.num+ "</td>" +
            "<td>"+ meeting.remark+ "</td>" +
            "</tr>";
        $("#findRoom").append(trStr);
    }
})

function searchMeeting(){
    var name = $("#meetingName").val();
    $("#findRoom").html("");

    for (var i=0; i<meetingJsonArray.length; i++) {
        var meeting = meetingJsonArray[i];
        if(meeting != undefined) {
            var isShow = false;
            if(name!="") {
                //判断当前会议是否满足过滤条件
                if(meeting.name.indexOf(name)!=-1){
                    isShow = true;
                }
            }else{
                isShow = true;
            }
            if(isShow){
                var trStr = "<tr>" +
                    "<td>"+ meeting.name+"</td>" +
                    "<td>"+ meeting.start_time+ "</td>" +
                    "<td>"+ meeting.end_time+"</td>" +
                    "<td>"+ meeting.num+ "</td>" +
                    "<td>"+ meeting.remark+ "</td>" +
                    "</tr>";
                $("#findRoom").append(trStr);
            }
        }


    }
}