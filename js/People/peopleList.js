var employeeJsonArray = window.parent.employeeJsonArray;
$(function(){
    //获取得到员工信息列表

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

//展现满足条件的员工信息列表数据
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
    setPages()
}

//展现满足条件的员工信息列表数据
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
    var cdepid = $("#dep").val();
    var clevelid = $("#levelid").val();
    var csalary = $("#salary").val();

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
        "levelid":clevelid,
        "salary":csalary,
        "joindate":"2020-10-09"
    }

    employeeJsonArray[employeeJsonArray.length] = newPeople;
    alert("添加成功");
    checkMenu("showPeople");
	$('#myFrame').attr('src', "PeopleManagement/people/peopleList.html");
}

function cancelAdd(){
    window.location.href = "adminIndex.html";
    // showPeople();
}


//全选操作
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
		var flag = window.confirm("确定要删除吗？");
		if(flag){
			alert("用户点击了确定删除");
			for(var i=0;i<checkeds.length;i++){
				var thisChecked = checkeds[i];
				var delDid = $(thisChecked).val();
				delPJson(delDid);
			}
			
		}
		showEmployeeList();
	}else{
		alert("请选择要删除的数据");
	}
	
}

function delPJson(delid){
	for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].id==delid){
            // delete employeeJsonArray[i];
            employeeJsonArray[i].name = "undefined";
            return;
        }
    }
}