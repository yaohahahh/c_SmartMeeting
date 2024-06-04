var deptJsonArray = window.parent.deptJsonArray;
$(function(){


    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        if(dept.dname=='undefined'){
            continue;
        }
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


function showSearchList(){
    $("#deptList").html("")

    var name = $("#name").val()
    if(name==null){
        return
    }
     
    for(var i=0;i<deptJsonArray.length;i++){
        var dept = deptJsonArray[i];
        if(dept!=undefined && dept.dname!='undefined'){
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
        perPage:5,
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

    if(dname==null || dname==''){
        parent.swal("添加部门", "部门名称不能为空！", "error")
        return
    }

    if(desc==null || desc==''){
        parent.swal("添加部门", "部门描述不能为空！", "error")
        return
    }

    var dept = {
        "did":deptJsonArray.length+1,
        "dname":dname,
        "desc":desc
    }
    deptJsonArray[deptJsonArray.length] = dept

    parent.swal("添加部门", "添加成功!", "success")
    window.location.href = "../dept/deptList.html"
        
}

function showEditDept(did){
    window.location.href = "editDept.html?did="+did;
}


function delChecked(){
	var checkeds = $("input[name='id']:checked");
	if(checkeds.length>0){





            





			

        parent.swal({
            title: "你确定？",
            text: "您将无法恢复这个部门以及部门内人员的信息！",
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
                    delJson(delDid);
                    parent.swal("删除!", "您选择的部门已被删除！", "success")  
                } 
                showSearchList();                  
            } else{
                parent.swal("取消!", "您的部门保持原样！", "error")
            }
        })
	}else{
		parent.swal("删除！", "请选择要删除的数据", "error"); 
	}
    
	
}

function delJson(delDid){
	for(var i=0;i<deptJsonArray.length;i++){
        if(deptJsonArray[i].did==delDid){

            deptJsonArray[i].dname = 'undefined';
            return;
        }
    }
}

