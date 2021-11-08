//初始化数据

//初始化员工列表
var employeeJsonArray

$.ajax({
    url:"Json/employee.json",
    type:"get",
    dataType:"json",
    success: function (res){
        console.log(res)
        employeeJsonArray = res;
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert(XMLHttpRequest.status);
        alert(XMLHttpRequest.readyState);
        alert(textStatus);
    }
})