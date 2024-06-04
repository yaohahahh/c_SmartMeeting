var meetJsonArray = window.parent.meetingRoomJsonArray;


saveMeet = function (){
    var name= $("#name").val();
    var place = $("#place").val();
    var large = $("#large").val();
    var m_status = "空闲";
    var book ="无";

    if(name==""||place==""||large==""){
        parent.swal("警告!", "请输入完整会议室信息！", "error")

        return;
    }

    for(var i=0;i<meetJsonArray.length;i++){
        var meet = meetJsonArray[i];
        if(meet!=undefined&&meet.name!='undefined') {
            if(name==meet.name)
            {
                parent.swal("警告!", "会议室门牌号重复", "error")

                return;
            }
            if(place==meet.place)
            {
                parent.swal("警告!", "会议室地点重复", "error")

                return;
            }
        }
    }
    var meet = {
        "id":meetJsonArray.length+1,
        "name":name,
        "place":place,
        "large":large,
        "m_status":m_status,
        "book":book
    };
    meetJsonArray[meetJsonArray.length] = meet;
    parent.swal("成功!", "新会议室："+name+" 已添加成功", "success")  

    window.location.href="../../MeetingRoom/meet/checkmeet.html";
}