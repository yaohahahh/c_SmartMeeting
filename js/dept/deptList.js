var deptJsonArray = window.parent.deptJsonArray;
$(function(){
    //当页面被加载完成后，立即会被执行的操作
    //获取得到部门信息列表
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        var trStr = "<tr>"+
        "<td><input type='checkbox' name='id' value='"+dept.did+"'/></td>"+
        "<td>"+dept.dname+"</td>"+
        "<td>"+dept.desc+"</td>"+
        "<td><img onclick='showEditDept("+dept.did+")' src='../../img/update.gif' /></td>"+
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
        if(dept!=undefined){
            if(dept.dname.indexOf(name)!=-1){
                var trStr = "<tr>"+
                "<td><input type='checkbox' name='id' value='"+dept.did+"'/></td>"+
                "<td>"+dept.dname+"</td>"+
                "<td>"+dept.desc+"</td>"+
                "<td><img onclick='showEditDept("+dept.did+")' src='../../img/update.gif' /></td>"+
                "</tr>";
                $("#deptList").append(trStr);
            }
        
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

//删除选中
function delChecked(){
	var checkeds = $("input[name='id']:checked");
	if(checkeds.length>0){
		var flag = window.confirm("确定要删除吗？");
		if(flag){
			alert("用户点击了确定删除");
			for(var i=0;i<checkeds.length;i++){
				var thisChecked = checkeds[i];
				var delDid = $(thisChecked).val();
                alert(delDid);
				delJson(delDid);
			}
			
		}
		showSearchList();
	}else{
		alert("请选择要删除的数据");
	}
	
}

function delJson(delDid){
	for(var i=0;i<deptJsonArray.length;i++){
        if(deptJsonArray[i].did==delDid){
            delete deptJsonArray[i];
            return;
        }
    }
}