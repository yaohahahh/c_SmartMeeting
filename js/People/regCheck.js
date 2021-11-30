var employeeJsonArray = window.parent.employeeJsonArray;
$(function(){
    //获取得到员工信息列表

    var name = $("#name").val()
    if(name==null){
        return
    }

    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].status=="0"){
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
                "<td><a onclick='c_showEditEmployee("+employee.id+")'>[查看详情]</a><a onclick='approve("+employee.id+")'>[审批通过]</a><a onclick='deny("+employee.id+")'>[不通过]</a><a onclick='showEditEmployee("+employee.id+")'>[修改并通过]</a></td>"+
                "</tr>";
                $("#check_employeeList").append(trStr);
            }
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
        if(employee!=undefined && employee.name!='undefined'){
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
                "<td><a onclick='c_showEditEmployee("+employee.id+")'>[查看详情]</a><a onclick='approve("+employee.id+")'>[审批通过]</a><a onclick='deny("+employee.id+")'>[不通过]</a><a onclick='showEditEmployee("+employee.id+")'>[修改并通过]</a></td>"+
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
    
    var name = $("#name").val()
    if(name==null){
        return
    }
     
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        if(employeeJsonArray[i].status=="1"){
            continue
        }
        if(employee!=undefined && employee.name!='undefined'){
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
                "<td><a onclick='c_showEditEmployee("+employee.id+")'>[查看详情]</a><a onclick='approve("+employee.id+")'>[审批通过]</a><a onclick='deny("+employee.id+")'>[不通过]</a><a onclick='showEditEmployee("+employee.id+")'>[修改并通过]</a></td>"+
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

//指向至编辑并提交页面
function showEditEmployee(id){
    window.location.href = "editPeople.html?id="+id;
}

//指向仅编辑页面
function c_showEditEmployee(id){
    window.location.href = "showDetail.html?id="+id;
}

function approve(id){
    alert("审批通过")
    for(var i=0;i<employeeJsonArray.length;i++){
        if(employeeJsonArray[i].id==id){
            employeeJsonArray[i].status="1"
        }
    }
    c_showEmployeeList();
}

function deny(){
    alert("不通过")
}

function c_updatePeople(){
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
    var cdep = $("#dep").val();
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
            employeeJsonArray[i].levelid = clevelid;
            employeeJsonArray[i].salary = csalary;
            employeeJsonArray[i].status = "0"

            alert("修改成功");
            window.location.href="regCheck.html";
            break;
        }
    }
    // c_showEmployeeList();
}

function c_delChecked(){
    var checkeds = $("input[name='id']:checked");
	if(checkeds.length>0){
		var flag = window.confirm("确定要删除吗？");
		if(flag){
			alert("用户点击了确定删除");
			for(var i=0;i<checkeds.length;i++){
				var thisChecked = checkeds[i];
				var delId = $(thisChecked).val();
				delPJson(delId);
			}
			
		}
		c_showEmployeeList();
	}else{
		alert("请选择要删除的数据");
	}
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