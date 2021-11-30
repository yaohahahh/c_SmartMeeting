var mid =getParam("mid");
var meetJsonArray = window.parent.meetingRoomJsonArray;

$(function ()
{
    for (var i = 0; i < meetJsonArray.length; i++) {
        var meet = meetJsonArray[i];
        if (meet.mid == mid) {
            $("#name").val(meet.name);
            $("#place").val(meet.place);
            $("#large").val(meet.large);
            // $("#book").val(meet.book);

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
        if (meet.mid == mid) {
            meet.name=name;
            meet.place=place;
            meet.large=large;

            alert("修改成功");
            window.location.href="meeting.html"
        }
    }
}