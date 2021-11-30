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
            "<td>"+meet.m_status+"</td>"+
            "<td>"+meet.book+"</td>"+
            "</tr>";
        $("#checkmeet").append(trStr);
    }
    showSearchMeet2();
});

function showSearchMeet2(){
    $("#checkmeet").html("");

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
                var trStr = "<tr>" +
                    "<td><input type='checkbox' name='id' value='" + meet.mid + "' /></td>" +
                    "<td>" + meet.name + "</td>" +
                    "<td>" + meet.place + "</td>" +
                    "<td>" + meet.large + "</td>" +
                    "<td>" + meet.m_status + "</td>" +
                    "<td>" + meet.book + "</td>" +
                    "</tr>";
                $("#checkmeet").append(trStr);
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

function check_meet()
{
    var ischeck =$("#check_meet").prop("checked");
    var checkBox =$("input[name='id']");
    for(var i=0;i<checkBox.length;i++)
    {
        var idcheck=checkBox[i];
        if($(idcheck).parent().parent("tr").css("display")=="table-row")
        {
            $(idcheck).prop("checked",ischeck);
        }
    }
}