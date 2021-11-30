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
    for (var i = 0; i < meetJsonArray.length; i++) {
        var meet = meetJsonArray[i];
        if (meet.id == id) {
            meet.name=name;
            meet.place=place;
            meet.large=large;

            alert("修改成功");
            window.location.href="meeting.html"
        }
    }
}