var employeeJsonArray = window.parent.employeeJsonArray;
$(function(){
    //获取得到员工信息列表
    for(var i=0;i<employeeJsonArray.length;i++){
        var employee = employeeJsonArray[i];
        var trStr = "<tr>"+
        "<td><input type='checkbox' name='id' value='"+employee.id+"'/></td>"+
        "<td>"+employee.name+"</td>"+
        "<td>"+employee.sex+"</td>"+
        "<td>"+employee.email+"</td>"+
        "<td>"+employee.speciality+"</td>"+
        "<td>"+employee.education+"</td>"+
        "<td>"+employee.party+"</td>"+
        "<td>"+employee.wechat+"</td>"+
        "<td>"+employee.phone+"</td>"+
        "<td><img onclick='showEditEmployee("+employee.id+")' src='../../img/update.gif' /></td>"+
        "</tr>";
        $("#employeeList").append(trStr);
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
        if(employee!=undefined){
            if(employee.name.indexOf(name)!=-1){
                var trStr = "<tr>"+
                "<td><input type='checkbox' name='id' value='"+employee.id+"'/></td>"+
                "<td>"+employee.name+"</td>"+
                "<td>"+employee.sex+"</td>"+
                "<td>"+employee.email+"</td>"+
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
    var dname = $('#name').val()
    var desc = $('#remark').val()

    var dept = {
        "did":deptJsonArray.length+1,
        "dname":dname,
        "desc":desc
    }
    deptJsonArray[deptJsonArray.length] = dept
    alert("添加成功");
    window.location.href = "../people/addPeople.html"
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
    showEmployeeList()
}

function showEditEmployee(id){
    window.location.href = "../people/editPeople.html?id="+id
}