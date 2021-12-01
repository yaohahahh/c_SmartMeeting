var mid = getParam("mid");
var meetJsonArray=window.parent.meetJsonArray;

$(function(){
    for(var i=0;i<meetJsonArray.length;i++){
    var meet=meetJsonArray[i];
    if(meet.mid==mid){
        $("#name").val(meet.mname);
        $("#room").val(meet.mroom);
        $("#start").val(meet.mstart);
        $("#end").val(meet.mend);
        $("#time").val(meet.mtime);
        $("#per").val(meet.mper);

        break;
        }
    }
});

function updateDept(){
    var mname=$("#name").val();
    var mroom=$("#room").val();
    var mstart=$("#start").val();
    var mend=$("#end").val();
    var mtime=$("#time").val();
    var mper=$("#per").val();
    for (var i=0;i<meetJsonArray.length;i++){
        var meet=meetJsonArray[i];
        if(meet.mid==mid){
            meet.mname=mname;
            meet.mroom=mroom;
            meet.mstart=mstart;
            meet.mend=mend;
            meet.mtime=mtime;
            meet.mper=mper;
            alert("修改成功");
            window.history.go(-1);
        }
    }
}