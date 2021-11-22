var deptJsonArray = window.parent.deptJsonArray;
$(function(){
    //当页面被加载完成后，立即会被执行的操作
    //获取得到部门信息列表
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        var trStr = "<tr>"+
        "<td><input type='checkbox' /></td>"+
        "<td>"+dept.dname+"</td>"+
        "<td>"+dept.desc+"</td>"+
        "<td><img onclick='showEditDept("+dept.did+")' src='../img/update.gif' /></td>"+
        "</tr>";
        $("#deptList").append(trStr);
    }

    setPages()
    
})

//展现满足条件的部门列表数据
function showSearchList(){
    $("#deptList").html("")
    
    var name = $("#name").val()
    if(name==null){
        return
    }
     
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        if(dept.dname.indexOf(name)!=-1){
            var trStr = "<tr>"+
            "<td><input type='checkbox' /></td>"+
            "<td>"+dept.dname+"</td>"+
            "<td>"+dept.desc+"</td>"+
            "<td><img src='../img/update.gif' /></td>"+
            "</tr>";
            $("#deptList").append(trStr);
        }
    }
    
    setPages()
}

function setPages(){
    $('.pagination-container').html("")
    
    $('.table tbody').paginathing({
        perPage:3,
        insertAfter:'.table',
        pageNumbers:true
    })
}

function showAddDept(){
    window.location.href = "addDept.html"
}

function saveDept(){
    var dname = $('#name').val()
    var desc = $('#remark').val()

    var dept = {
        "did":deptJsonArray.length+1,
        "dname":dname,
        "desc":desc
    }
    deptJsonArray[deptJsonArray.length] = dept
    alert("添加成功");
    window.location.href = "../dept/deptList.html"
        
}

function showEditDept(did){
    window.location.href = "editDept.html?did="+did;
}