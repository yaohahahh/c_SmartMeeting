var id  = getParam("id");
var employeeJsonArray = window.parent.employeeJsonArray;
$(function(){
    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].id==id){
            $("#name").val(employeeJsonArray[i].name);
            $("#cardid").val(employeeJsonArray[i].cardid);
            $("#sex").val(employeeJsonArray[i].sex);
            $("#email").val(employeeJsonArray[i].email);
            $("#education").val(employeeJsonArray[i].education);
            $("#speciality").val(employeeJsonArray[i].speciality);
            $("#party").val(employeeJsonArray[i].party);
            $("#phone").val(employeeJsonArray[i].phone);
            $("#wechat").val(employeeJsonArray[i].wechat);
            $("#address").val(employeeJsonArray[i].address);
            $("#postcode").val(employeeJsonArray[i].postcode);
            $("#birthday").val(employeeJsonArray[i].birthday);
            $("#race").val(employeeJsonArray[i].race);
            $("#remark").val(employeeJsonArray[i].remark);
            $("#dep").val(employeeJsonArray[i].dep);
            $("#levelid").val(employeeJsonArray[i].levelid);
            $("#salary").val(employeeJsonArray[i].salary);
            
            break;
        }
    }
});

function updatePeople(){
    var cname = $("#name").val();
    var ccardid = $("#cardid").val();
    var csex = $("#sex").val();
    var cemail = $("#email").val();
    var ceducation = $("#education").val();
    var cspeciality = $("#speciality").val();
    var cparty = $("#party").val();
    var cphone = $("#phone").val();
    var cwechat = $("#wechat").val();
    var caddress = $("#address").val();
    var cpostcode = $("#postcode").val();
    var cbirthday = $("#birthday").val();
    var crace = $("#race").val();
    var cremark = $("#remark").val();
    var cdep = $("#dep option:selected").text();
    var cdepid = $("#dep").val();
    var clevelid = $("#levelid").val();
    var csalary = $("#salary").val();

    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].id==id){
            employeeJsonArray[i].name = cname;
            employeeJsonArray[i].cardid = ccardid;
            employeeJsonArray[i].sex = csex;
            employeeJsonArray[i].email = cemail;
            employeeJsonArray[i].education = ceducation;
            employeeJsonArray[i].speciality = cspeciality;
            employeeJsonArray[i].party = cparty;
            employeeJsonArray[i].phone = cphone;
            employeeJsonArray[i].wechat = cwechat;
            employeeJsonArray[i].address = caddress;
            employeeJsonArray[i].postcode = cpostcode;
            employeeJsonArray[i].birthday = cbirthday;
            employeeJsonArray[i].race = crace;
            employeeJsonArray[i].remark = cremark;
            employeeJsonArray[i].dep = cdep;
            employeeJsonArray[i].depid = cdepid;
            employeeJsonArray[i].levelid = clevelid;
            employeeJsonArray[i].salary = csalary;
            employeeJsonArray[i].status = "1"

            alert("修改成功");
            window.location.href="peopleList.html";
            break;
        }
    }

}