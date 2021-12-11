var id =getParam("id");
var meetJsonArray = window.parent.meetingRoomJsonArray;

$(function ()
{
    for (var i = 0; i < meetJsonArray.length; i++) {
        var meet = meetJsonArray[i];
        if (meet.id == id) {
            $("#name").val(meet.name);
            $("#place").val(meet.place);
            $("#large").val(meet.large);;

            break;
        }
    }
});

function updateMeet(){
    var name =$("#name").val();
    var place = $("#place").val();
    var large=$("#large").val();

    if(name==""){
        parent.swal("会议室修改", "会议室名称不能为空", "error")
        // alert("会议名称不能为空");
        return;
    }

    if(place==""){
        parent.swal("会议室修改", "会议室地点不能为空", "error")
        // alert("会议地点不能为空");
        return;
    }

    if(large==""){
        parent.swal("会议室修改", "会议室大小不能为空", "error")
        // alert("会议大小不能为空");
        return;
    }

    
    for (var i = 0; i < meetJsonArray.length; i++) {
        var meet = meetJsonArray[i];
        if (meet.id == id) {
            meet.name=name;
            meet.place=place;
            meet.large=large;

            alert("修改成功");
            window.location.href="checkmeet.html"
        }
    }
}