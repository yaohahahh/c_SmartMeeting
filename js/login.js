function checkLogin(){
    // var username = document.getElementById("username").value;
    // var pwd = document.getElementById("pwd").value;
    var username = $("#username").val();
    var pwd = $("#pwd").val();

    if(username==""){
        // document.getElementById("errorspan").innerHTML = "请输入用户名"
        $("#errorspan").html("请输入用户名")
        //alert("请输入用户名");
        return false;
    }
    if(pwd==""){
        // document.getElementById("errorspan").innerHTML = "请输入密码"
        $("#errorspan").html("请输入密码")
        // alert("请输入用户名");
        return false;
    }

}

function focusLogin(){
    $("#errorspan").html("")
}

function blurUsername(){
    var username = $("#username").val();
    if(username==""){
        // document.getElementById("errorspan").innerHTML = "请输入用户名"
        $("#errorspan").html("请输入用户名")
        //alert("请输入用户名");
    }
}

function blurpwd(){
    var pwd = $("#pwd").val();
    if(pwd==""){
        // document.getElementById("errorspan").innerHTML = "请输入密码"
        $("#errorspan").html("请输入密码")
        // alert("请输入用户名");
    }
}

function login(){
    var username = $("#username").val()
    var pwd = $("#pwd").val()


    alert(employeeJsonArray)

    for(var i=0;i<employeeJsonArray.length;i++){
        alert(employeeJsonArray.phone)
        if (employeeJsonArray[i].phone==username &&
            employeeJsonArray[i].password==pwd &&
            employeeJsonArray[i].auditstatus=="1"){
            if(employeeJsonArray[i].status=="1"){
                window.location.href = "admin_index.html"
                //跳转到管理员首页
            }else {
                window.location.href = "index.html"
                //跳转到普通用户首页
            }
        }
    }
    $("#errorspan").html("登录失败")
}