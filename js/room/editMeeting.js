


var mid = getParam("mid");
var meetingJsonArray = window.parent.meetingJsonArray;

$(function (){
    for(var i=0; i<meetingJsonArray.length; i++){
        var meeting = meetingJsonArray[i];
        if(dept.mid==mid){
            $("#name").val(meeting.name);
            $("#starttime").val(meeting.start_time);
            $("#remark").val()(meeting.remark);
            break
        }
    }
});

function updateDept(){

    var dname = $("#name").val();
    var desc = $("#remark").val();

    for(var i=0; i<deptJsonArray.length; i++){
        var dept = deptJsonArray[i];
        if(dept.did==did){
            dept.dname = dname;
            dept.desc = desc;
            alert("修改成功");
            window.location.href = "../../room/.html"
        }
    }
}
