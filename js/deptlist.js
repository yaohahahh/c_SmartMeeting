// var deptJsonArray = window.parent.deptJsonArray;
$(function(){
    //当页面被加载完成后，立即会被执行的操作
    //获取得到部门信息列表
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        var trStr = "<tr>"+
        "<td><input type='checkbox' /></td>"+
        "<td>"+dept.dname+"</td>"+
        "<td>"+dept.desc+"</td>"+
        "<td><img src='../img/update.gif' /></td>"+
        "</tr>";
        $("#deptList").append(trStr);
    }
    
})