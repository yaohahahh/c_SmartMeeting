

function checkLogin(){


    var username = $("#username").val();
    var pwd = $("#pwd").val();

    if(username==""){

        $("#errorspan").html("请输入用户名")

        return false;
    }
    if(pwd==""){

        $("#errorspan").html("请输入密码")

        return false;
    }

}

function focusLogin(){
    $("#errorspan").html("")
}

function blurUsername(){
    var username = $("#username").val();
    if(username==""){

        $("#errorspan").html("请输入用户名")

    }
}

function blurpwd(){
    var pwd = $("#pwd").val();
    if(pwd==""){

        $("#errorspan").html("请输入密码")

    }
}

function login(){
    var username = $("#username").val()
    var pwd = $("#pwd").val()
    var status = 0

    for(var i=0;i<employeeJsonArray.length;i++){
        if (employeeJsonArray[i].phone==username &&
            employeeJsonArray[i].password==pwd &&
            employeeJsonArray[i].status=="1"){

            if(employeeJsonArray[i].auditstatus=="1"){
                status+=1;
                $("#errorspan").html("管理员登录成功")
                window.location.href = "adminIndex.html?loginUserId="+employeeJsonArray[i].id;


            }else {
                status+=1;
                $("#errorspan").html("普通用户登陆成功")
                window.location.href = "userIndex.html?loginUserId="+employeeJsonArray[i].id;

            }

        }
    }
    if(status==0){$("#errorspan").html("登录失败")}

}

function resetPwd(){
    var username = $("#R-username").val()
    var cardid = $("#R-cardid").val()
    if(username==""){
        parent.swal("提示!", "请输入用户名", "warning")  
        return false;
    }
    if(cardid==""){
        parent.swal("提示!", "请输入身份证号", "warning")  
        return false;
    }
    parent.swal("密码重置成功!", "您的初始密码为：123123", "success");
    

}