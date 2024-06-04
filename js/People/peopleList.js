var employeeJsonArray = window.parent.employeeJsonArray;
var deptJsonArray = window.parent.deptJsonArray;
$(function(){




    $("#dep").html("");
    var optionStr = "<option value='0'>请选择</option>";
    $("#dep").append(optionStr)
    for (var i=0; i<deptJsonArray.length; i++) {
        var dept = deptJsonArray[i];
        if(dept != undefined && dept.dname != 'undefined'){
            var optionStr = "<option value='"+ dept.did + "'>"+dept.dname + "</option>";
            $("#dep").append(optionStr)
        }
    }

    var name = $("#name").val()
    if(name==null){
        return
    }
    
    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].status=="0"){
            continue;
        }else{
            if(employeeJsonArray[i]!=undefined && employeeJsonArray[i].name!='undefined'){
                var employee = employeeJsonArray[i];
                var trStr = "<tr>"+
                "<td><input type='checkbox' name='id' value='"+employee.id+"'/></td>"+
                "<td>"+employee.name+"</td>"+
                "<td>"+employee.sex+"</td>"+
                "<td>"+employee.email+"</td>"+
                "<td>"+employee.dep+"</td>"+
                "<td>"+employee.speciality+"</td>"+
                "<td>"+employee.education+"</td>"+
                "<td>"+employee.party+"</td>"+
                "<td>"+employee.wechat+"</td>"+
                "<td>"+employee.phone+"</td>"+
                "<td><img onclick='showEditEmployee("+employee.id+")' src='../../img/update.gif' /></td>"
                "</tr>";
                $("#employeeList").append(trStr);
            }else{
                continue;
            }

        }
        
    }

    setPages()
    
})


function showEmployeeList(){

    $("#employeeList").html("")
    
    var name = $("#name").val()
    if(name==null){
        return
    }
     
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employee!=undefined && employee.name!='undefined'){
            if(employee.name.indexOf(name)!=-1){
                if(employee.status=="0"){
                    continue;
                }
                var trStr = "<tr>"+
                "<td><input type='checkbox' name='id' value='"+employee.id+"'/></td>"+
                "<td>"+employee.name+"</td>"+
                "<td>"+employee.sex+"</td>"+
                "<td>"+employee.email+"</td>"+
                "<td>"+employee.dep+"</td>"+
                "<td>"+employee.speciality+"</td>"+
                "<td>"+employee.education+"</td>"+
                "<td>"+employee.party+"</td>"+
                "<td>"+employee.wechat+"</td>"+
                "<td>"+employee.phone+"</td>"+
                "<td><img onclick='showEditEmployee("+employee.id+")' src='../../img/update.gif' /></td>"
                "</tr>";
                $("#employeeList").append(trStr);
            }
        }  
    }   

    for(var i=0;i<deptJsonArray.length;i++){
        if(deptJsonArray[i].dname=="undefined"){

            parent.swal("警告", "存在已删除部门! 请及时更新人员数据！", "warning")
        }

    }
    setPages()
}


function showDeptEmployeeList(){

    $("#employeeList").html("")
    
    var dep = $("#dep").val()
    if(dep==null){
        return
    }
     
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employee!=undefined && employee.name!='undefined'){
            if(employee.dep.indexOf(dep)!=-1){
                if(employee.status=="0"){
                    continue;
                }
                var trStr = "<tr>"+
                "<td><input type='checkbox' name='id' value='"+employee.id+"'/></td>"+
                "<td>"+employee.name+"</td>"+
                "<td>"+employee.sex+"</td>"+
                "<td>"+employee.email+"</td>"+
                "<td>"+employee.dep+"</td>"+
                "<td>"+employee.speciality+"</td>"+
                "<td>"+employee.education+"</td>"+
                "<td>"+employee.party+"</td>"+
                "<td>"+employee.wechat+"</td>"+
                "<td>"+employee.phone+"</td>"+
                "<td><img onclick='showEditEmployee("+employee.id+")' src='../../img/update.gif' /></td>"+
                "</tr>";
                $("#employeeList").append(trStr);
            }
        }  
    }   
    setPages()
}
        
function setPages(){
    $('.pagination-container').html("")
    
    $('.table tbody').paginathing({
        perPage:6,
        insertAfter:'.table',
        pageNumbers:true
    })
}





function addPeople(){
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
    var cdepid = $("#dep option:selected").val();
    var clevel = $("#levelid").val();
    var clevelid = $("#levelid option:selected").text();
    var csalary = $("#salary").val();

    if(cname==null || cname==""){

        parent.swal("警告", "请输入姓名！", "warning")
        return
    }
    if(ccardid==null || ccardid==""){

        parent.swal("警告", "请输入身份证号！", "warning")
        return
    }
    if(csex==null || csex==""){

        parent.swal("警告", "请输入性别！", "warning")
        return
    }
    if(cemail==null || cemail==""){

        parent.swal("警告", "请输入邮箱！", "warning")
        return
    }
    if(ceducation==null || ceducation==""){

        parent.swal("警告", "请输入学历！", "warning")
        return
    }
    if(cspeciality==null || cspeciality==""){

        parent.swal("警告", "请输入专业！", "warning")
        return
    }
    if(cparty==null || cparty==""){

        parent.swal("警告", "请输入政治面貌！", "warning")
        return 
    }
    if(cphone==null || cphone==""){

        parent.swal("警告", "请输入电话！", "warning")
        return
    }
    if(cwechat==null || cwechat==""){

        parent.swal("警告", "请输入微信！", "warning")
        return
    }
    if(caddress==null || caddress==""){

        parent.swal("警告", "请输入地址！", "warning")
        return
    }
    if(cpostcode==null || cpostcode==""){

        parent.swal("警告", "请输入邮编！", "warning")
        return
    }
    if(cbirthday==null || cbirthday==""){

        parent.swal("警告", "请输入出生日期！", "warning")
        return
    }
    if(crace==null || crace==""){

        parent.swal("警告", "请输入民族！", "warning")
        return
    }
    if(cremark==null || cremark==""){

        parent.swal("警告", "请输入备注！", "warning")
        return
    }
    if(cdep==null || cdep==""){

        parent.swal("警告", "请选择部门！", "warning")
        return
    }
    if(clevel==null || clevel==""){

        parent.swal("警告", "请选择职级！", "warning")
        return
    }
    if(csalary==null || csalary==""){

        parent.swal("警告", "请输入薪资！", "warning")
        return
    }
    

    var newPeople = {
        "id":employeeJsonArray.length+1,
        "name":cname,
        "cardid":ccardid,
        "sex":csex,
        "email":cemail,
        "education":ceducation,
        "speciality":cspeciality,
        "phone":cphone,
        "password":"123456",
        "auditstatus":cphone,
        "status":"0",
        "party":cparty,
        "wechat":cwechat,
        "address":caddress,
        "postcode":cpostcode,
        "birthday":cbirthday,
        "race":crace,
        "remark":cremark,
        "depid":cdepid,
        "dep":cdep,
        "level":clevel,
        "levelid":clevelid,
        "salary":csalary,
        "joindate":"2020-10-09"
    }

    employeeJsonArray[employeeJsonArray.length] = newPeople;
    parent.swal("提示", "添加成功！", "success")

    checkMenu("showPeople");
}

function cancelAdd(){

    parent.gohome();
}



function checkAll(){
	var isChecked = $("#checkAll").prop("checked");
	var checkboxes = $("input[name='id']");
	for(var i=0;i<checkboxes.length;i++){
		var idCheckbox = checkboxes[i];
		if($(idCheckbox).parent().parent("tr").css("display")=="table-row"){
			$(idCheckbox).prop("checked",isChecked);
		}
	}
}

function cancelSearch(){
    $("#name").val("")
    $("#dep").val("")
    showEmployeeList()
}

function showEditEmployee(id){
    window.location.href = "editPeople.html?id="+id;
}

function delChecked(){
    var checkeds = $("input[name='id']:checked");









			





    if(checkeds.length>0){
        parent.swal({
            title: "你确定？",
            text: "您将无法恢复这个员工的信息！",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "是的，删除！",
            cancelButtonText: "不，取消",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                for(var i=0;i<checkeds.length;i++){
                    var thisChecked = checkeds[i];
                    var delDid = $(thisChecked).val();
                    delPJson(delDid);
                    parent.swal("删除!", "您选择的员工已被删除！", "success")  
                    showEmployeeList();
                }
                                
            } else{
                parent.swal("取消!", "取消删除员工！", "error")
            }
        })
	}else{
		parent.swal("删除！", "请选择要删除的数据", "error"); 
	}
     
	
}

function delPJson(delid){
	for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].id==delid){

            employeeJsonArray[i].name = "undefined";
            return;
        }
    }
}

function onClickSelector(){
    $("#dep").html("");
    var optionStr = "<option value='0'>请选择</option>";
    $("#dep").append(optionStr)
    for (var i=0; i<deptJsonArray.length; i++) {
        var dept = deptJsonArray[i];
        if(dept != undefined && dept.dname != 'undefined'){
            var optionStr = "<option value='"+ dept.did + "'>"+dept.dname + "</option>";
            $("#dep").append(optionStr)
        }
    }

}

function onClickShowSelector(){
    $("#dep").html("");
    var optionStr = "<option value='0'>请选择</option>";
    $("#dep").append(optionStr)
    for (var i=0; i<deptJsonArray.length; i++) {
        var dept = deptJsonArray[i];
        if(dept != undefined && dept.dname != 'undefined'){
            var optionStr = "<option>"+dept.dname + "</option>";
            $("#dep").append(optionStr)
        }
        
    }
    
}