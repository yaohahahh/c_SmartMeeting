var deptJsonArray = window.parent.deptJsonArray;
var meetingRoomJsonArray = window.parent.meetingRoomJsonArray;
var employeeJsonArray = window.parent.employeeJsonArray;
var meetingJsonArray = window.parent.meetingJsonArray;

function body_load(){//当页面加载时触发执行
    //首先生成部门下拉选项
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        if(dept!=undefined){
            $("#selDepartments").append("<option value='"+dept.did+"'>"+dept.dname+"</option>");
        }
    }
    fillEmployees();//根据选中的部门生成员工列表下拉框
}


//根据选中的部门生成员工列表下拉框
function fillEmployees(){
    $("#selEmployees").html("");//先清空该下拉框
    //获取选中的部门下拉框
    var deptid = $("#selDepartments").val();
    for(i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employee!=undefined && employee.depid==deptid){
            $("#selEmployees").append("<option value='"+employee.id+"'>"+employee.name+"</option>");
        }
    }
}

//点击选择该员工进行参会的按钮触发的事件
function selectEmployees(){
    //获取得到所有的选中的员工列表
    var selectedEmps = $("#selEmployees>option:selected");
    for(var i=0;i<selectedEmps.length;i++) {//将选中的员工追加到右侧的员工列表区域
        var selectedEmp = selectedEmps[i];
        //首先判断该员工原来是否有出现在右侧区域中
        //初始化定义并未出现过
        var flag = true;
        var selSelectedEmployees = $("#selSelectedEmployees option");
        for (var j = 0; j < selSelectedEmployees.length; j++) {
            var selSelectedEmployee = selSelectedEmployees[j];
            if ($(selSelectedEmployee).val() == $(selectedEmp).val()) {
                flag = false;
                break;
            }
        }
        if (flag) {
            $("#selSelectedEmployees").append("<option value='" + $(selectedEmp).val() + "'>" + $(selectedEmp).text() + "</option>");
        }
    }
}

//点击取消选择该员工进行参会的按钮触发的事件
function deSelectEmployees(){
    //获取得到所有的选中的想要取消参加会议的员工列表
    var selSelectedEmployees = $("#selSelectedEmployees>option:selected");
    for(var i=0;i<selSelectedEmployees.length;i++){
        $(selSelectedEmployees[i]).remove();
    }
}
function checkIsUsed(mid,start_time,end_time){
    for(var i=0;i<meetingJsonArray.length; i++){
        var meeting = meetingJsonArray[i];
        if(meeting != undefined && meeting.mid == mid && meeting.status == "1"){
            var pre_starttime = new Date(start_time.replaceAll("-","/"));
            var pre_endtime = new Date(end_time.replaceAll("-","/"));
            var meeting_starttime = new Date(meeting.start_time.replaceAll("-","/"));
            var meeting_endtime = new Date(meeting.end_time.replaceAll("-","/"));
            if(pre_starttime>=meeting_starttime && pre_starttime<meeting_endtime){
                return false
            }
            if(pre_endtime>meeting_starttime && pre_endtime<=meeting_endtime){
                return false
            }
            if(meeting_endtime>pre_starttime && meeting_endtime<=pre_endtime){
                return false
            }
            if(meeting_starttime>=pre_starttime && meeting_starttime<pre_endtime){
                return false
            }
            return true
        }
    }
}
function reserveMeeting(){
    var mname = $("#title").val();
    var start_time = $("#starttime").val();
    var end_time = $("#endtime").val();
    var num = $("#num").val();
    var mid = $("#mid").val();
    var participants = getParticipants();
    var remark = $("#remark").val();
    if(checkIsUsed(mid,start_time,end_time)){
        var meeting = {
            "id": meetingJsonArray.length+1,
            "name":mname,
            "num":num,
            "start_time": start_time,
            "end_time": end_time,
            "eid":"1",
            "mid":mid,
            "participants":participants,
            "remark": remark,
            "status":1
        }
        meetingJsonArray[meetingJsonArray.length] = meeting;
        alert("预定成功");
    }else{
        alert("失败")
    }
}

function chooseRoom(){
    for (var i=0; i<meetingRoomJsonArray.length; i++) {
        var meetingroom = meetingRoomJsonArray[i];
        var optionStr = "<option value='"+ meetingroom.id + "'>"+meetingroom.name + "</option>";
        $("#mid").append(optionStr)
    }
}

function getParticipants(){
    var participants = "";
    //获取已经选择的员工
    var selSelectedEmployees = $("#selSelectedEmployees option");
    for(var i=0;i<selSelectedEmployees.length; i++){
        var selSelectedEmp = selSelectedEmployees[i];
        participants += $(selSelectedEmp).val()+",";
    }
    return participants;
}

