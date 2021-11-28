var employeeJsonArray = window.parent.employeeJsonArray;
$(function(){
    //获取得到员工信息列表
    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].status=="0"){
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
            "<td><img onclick='showEditEmployee("+employee.id+")' src='../../img/update.gif' /><a onclick='approve()'>[审批通过]</a><a onclick='deny()'>[不通过]</a></td>"+
            "</tr>";
            $("#check_employeeList").append(trStr);
        }
        
    }

    c_setPages()
    
})

function c_showEmployeeList(){

    $("#check_employeeList").html("")
    
    var name = $("#name").val()
    if(name==null){
        return
    }
     
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employeeJsonArray[i].status=="1"){
            continue
        }
        if(employee!=undefined){
            if(employee.name.indexOf(name)!=-1){
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
                $("#check_employeeList").append(trStr);
            }
        }  
    }   
    c_setPages()
}

//展现满足条件的员工信息列表数据
function c_showDeptEmployeeList(){

    $("#check_employeeList").html("")
    
    var dep = $("#dep").val()
    if(dep==null){
        return
    }
     
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employeeJsonArray[i].status=="1"){
            continue
        }
        if(employee!=undefined){
            if(employee.dep.indexOf(dep)!=-1){
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
                $("#check_employeeList").append(trStr);
            }
        }  
    }   
    c_setPages()
}
        
function c_setPages(){
    $('.pagination-container').html("")
    
    $('.table tbody').paginathing({
        perPage:6,
        insertAfter:'.table',
        pageNumbers:true
    })
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

function c_cancelSearch(){
    $("#name").val("")
    $("#dep").val("")
    c_showEmployeeList()
}

function showEditEmployee(id){
    window.location.href = "editPeople.html?id="+id;
}

function approve(){
    alert("审批通过")
}

function deny(){
    alert("不通过")
}