var meetJsonArray = window.parent.meetingRoomJsonArray;


saveMeet = function (){
    var name= $("#name").val();
    var place = $("#place").val();
    var large = $("#large").val();
    var m_status = $("#m_status").val();
    var book ="none";
    var meet = {
        "mid":meetJsonArray.length+1,
        "name":name,
        "place":place,
        "large":large,
        "m_status":m_status,
        "book":book
    };
    meetJsonArray[meetJsonArray.length] = meet;
    alert("添加成功");
    window.location.href="../weblearning/meet/meeting.html";
}