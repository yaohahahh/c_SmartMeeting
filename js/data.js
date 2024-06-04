
var loginUser;


var employeeJsonArray;
$.ajax({
    url:"../Json/employee.json",
    type:"get",
    dataType:"json",
    async:false,
    success: function (res){
        console.log(res);
        employeeJsonArray = res;
    },error: function(XMLHttpRequest, textStatus, errorThrown) {




    }
})

var deptJsonArray
$.ajax({
    url:"../Json/depts.json",
    type:"get",
    dataType:"json",
    success: function (res){
        console.log(res);
        deptJsonArray = res;
    },error: function(XMLHttpRequest, textStatus, errorThrown) {




    }
})




var meetingJsonArray;
$.ajax({
    contentType: false,
    processData: false,
    async:false,
    url:"../Json/meetings.json",
    dataType:"json",
    success:function(resp){
        meetingJsonArray = resp;
    }
});

var meetingRoomJsonArray;
$.ajax({
    contentType: false,
    processData: false,
    async:false,
    url:"../Json/meetingRoom.json",
    dataType:"json",
    success:function(resp){
        meetingRoomJsonArray = resp;
    }
});

var meetJsonArray;
$.ajax({
    url:"../Json/meeting.json",
    dataType:"json",
    success:function(resp){
        meetJsonArray=resp;
    }
})

var levelJsonArray;
$.ajax({
    url:"../Json/levels.json",
    dataType:"json",
    success:function(resp){
        levelJsonArray=resp;
    }
})