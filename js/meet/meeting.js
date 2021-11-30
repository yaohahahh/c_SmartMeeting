var meetJsonArray = window.parent.meetingRoomJsonArray;

$(function ()
{
    for(var i=0;i<meetJsonArray.length;i++)
    {
        var meet = meetJsonArray[i];
        var trStr = "<tr>"+
            "<td><input type='checkbox' /></td>"+
            "<td>"+meet.name+"</td>"+
            "<td>"+meet.place+"</td>"+
            "<td>"+meet.large+"</td>"+
            // "<td>"+meet.book+"</td>"+
            "</tr>";
        $("#meeting").append(trStr);
    }
    showSearchMeet();
});

function showSearchMeet(){
    $("#meeting").html("");

    var name = $("#name").val();

    for(var i=0;i<meetJsonArray.length;i++){
        var meet = meetJsonArray[i];
       if(meet!=undefined) {
           var inShow = false;
           if (name != "") {
               if (meet.name.indexOf(name) != -1) {
                   inShow = true;
               }
           } else {
               inShow = true;
           }

           if (inShow) {
               var Str = "<tr>" +
                   "<td><input type='checkbox' name='id' value='" +meet.mid+ "' /></td>" +
                   "<td>" + meet.name + "</td>" +
                   "<td>" + meet.place + "</td>" +
                   "<td>" + meet.large + "</td>" +
                   "<td><img onclick='showEditMeet("+meet.mid+")' src='../img/update.gif' /></td>" +
                   "</tr>";
               $("#meeting").append(Str);
           }
       }
    }
    setPage();
}

//使用分页插件，进行分页展现
function setPage(){
    $('.table tbody').paginathing({
        perPage: 3,//每页展现条数
        insertAfter: '.table',
        pageNumbers: true
    });
}

function showAddMeet(){
    window.location.href="../../meet/addMeet.html";
}

function showEditMeet(mid){
    window.location.href="editRoom.html?mid="+mid;
}

function checkAllmeet()
{
    var isCheck =$("#checkAllmeet").prop("checked");
    var checkbox =$("input[name='id']");
    for(var i=0;i<checkbox.length;i++)
    {
        var idCheck=checkbox[i];
        if($(idCheck).parent().parent("tr").css("display")=="table-row")
        {
            $(idCheck).prop("checked",isCheck);
        }
    }
}

function delJson(delmid)
{
    for(var i=0; i<meetJsonArray.length;i++)
    {
        var meet =meetJsonArray[i];
        if(meet.mid==delmid)
        {
            delete meetJsonArray[i];
            return;
        }
    }
}

function delChecked(){
    var checked=$("input[name='id']:checked")
    if(checked.length>0)
    {
        var flag =window.confirm("确定要删除么");
        if(flag)
        {
            for(var i=0;i<checked.length;i++)
            {
                var thisChecke =checked[i];
                var delmid =$(thisChecke).val();
                delJson(delmid);
            }
            showSearchMeet();
        }
        else
        {
            alert("请选择要删除的数据");
        }
    }
}