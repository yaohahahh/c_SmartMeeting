var meetJsonArray = window.parent.meetingRoomJsonArray;

$(function ()
{
    for(var i=0;i<meetJsonArray.length;i++) {
        var meet = meetJsonArray[i];

        if (meet != undefined && meet.name != 'undefined') {
            var trStr = "<tr>" +

                "<td>" + meet.name + "</td>" +
                "<td>" + meet.place + "</td>" +
                "<td>" + meet.large + "</td>" +
                "<td>" + meet.m_status + "</td>" +

                "</tr>";
            $("#checkmeet").append(trStr);
        }
    }
    Pages();

});




































function Pages(){
    $('.table tbody').paginathing({
        perPage: 3,
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