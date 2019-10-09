var wrong = '<img src="/image3/wrong.png">';
var more = '<img src="/image3/more.png">';
var right = '<img src="/image3/right.png">';
var question = '<img src="/image3/question.png">';
var sName = "teacher";

//检验用户名
function validate_username(id) {
    var usernameReg = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,16}[a-zA-Z0-9]$/;
    if (id == "") {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>&nbsp;用户名不能为空</label>';
    } else if (id.search(usernameReg) == -1) {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>&nbsp;1.用户名由字母、数字、下划线、减号组成</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>&nbsp;2.用户名只能以数字、字母开头或结尾</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>&nbsp;3.用户名长度为 4-18 字符</label>';
    } else document.getElementById("warning_id").innerHTML = right;
}

// '<label></label><br>'
// 检验密码
function validate_password(password) {
    var passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if (password == "") {
        document.getElementById("warning_password").innerHTML = wrong;
        document.getElementById("warning_password").innerHTML += '<label>&nbsp;密码不能为空</label>';
    } else if (password.search(passwordReg) == -1) {
        document.getElementById("warning_password").innerHTML = wrong;
        document.getElementById("warning_password").innerHTML += '<label>&nbsp;密码长度须大于6</label><br>';
        document.getElementById("warning_password").innerHTML += '<label>&nbsp;至少包括大小写字母和数字</label>';
    } else document.getElementById("warning_password").innerHTML = right;
}

// 检验第二次密码
function validate_password2(password2) {
    var password = document.getElementById("orign_password");
    if (password2 != password.value) {
        document.getElementById("warning_password2").innerHTML = wrong;
        document.getElementById("warning_password2").innerHTML += '<label>&nbsp;两次密码输入不一致</label>';
    } else document.getElementById("warning_password2").innerHTML = right;
}

// 检验手机号
function validate_Pnumber(Pnumber) {
    var PnumberReg = /^[1][0-9]{10}$/;
    if (Pnumber == "") {
        document.getElementById("warning_Pnumber").innerHTML = wrong;
        document.getElementById("warning_Pnumber").innerHTML += '<label>&nbsp;手机号不能为空</label>';
    } else if (Pnumber.search(PnumberReg) == -1) {
        document.getElementById("warning_Pnumber").innerHTML = wrong;
        document.getElementById("warning_Pnumber").innerHTML += '<label>&nbsp;手机号格式不正确</label>';
    } else document.getElementById("warning_Pnumber").innerHTML = right;
}

// 发送验证码开始计时
function sendCode(button) {
    time(button);
    document.getElementById("check_Code").style.color = "#1afa29";
    document.getElementById("check_Code").innerHTML = '<label>验证码已发送至您的手机，请查收</label>';
}

//验证码倒计时
var wait = 59;

function time(button) {
    if (wait == 0) {
        button.removeAttribute("disabled");
        button.value = "获取验证码";
        wait = 59;
    } else {
        button.setAttribute("disabled", true);
        button.value = wait + "秒后重新获取";
        wait--;
        setTimeout(function () {
                time(button)
            },
            1000)
    }
}

// 检验验证码
function validate_code(code) {
    if (code == "888888") {
        document.getElementById("check_Code").innerHTML = right;
    } else {
        document.getElementById("check_Code").style.color = "#000000"
        document.getElementById("check_Code").innerHTML = wrong;
        document.getElementById("check_Code").innerHTML += '<label>&nbsp;验证码不正确，请重新输入</label>';
    }
}

// 检验邮箱
function validate_email(email) {
    var emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
    if (email == "") {
        document.getElementById("check_Email").innerHTML = wrong;
        document.getElementById("check_Email").innerHTML += '<label>&nbsp;保密邮箱不能为空</label>';
    } else if (email.search(emailReg) == -1) {
        document.getElementById("check_Email").innerHTML = wrong;
        document.getElementById("check_Email").innerHTML += '<label>&nbsp;邮箱格式不正确</label>';
    } else document.getElementById("check_Email").innerHTML = right;
}

// 设置工号/学号
function user_Type(user_type) {
    if (user_type == "teacher") {
        document.getElementById("usersType").innerHTML = "工号";
        sName = "teacher";
    } else {
        document.getElementById("usersType").innerHTML = "学号";
        sName = "student";
    }
}

//检验工号/学号
function validate_usernumber(usernumber) {
    var tPattern = /^[0-9]{5}$/;
    var sPattern = /^[0-9]{8}$/;
    if (sName == "teacher") {
        if (usernumber == "") {
            document.getElementById("check_usernumber").innerHTML = wrong;
            document.getElementById("check_usernumber").innerHTML += '<label>&nbsp;工号不能为空</label>';
        } else if (usernumber.search(tPattern) == -1) {
            document.getElementById("check_usernumber").innerHTML = wrong;
            document.getElementById("check_usernumber").innerHTML += '<label>&nbsp;工号须为5位数字</label>';
        } else document.getElementById("check_usernumber").innerHTML = right;
    } else {
        if (usernumber == "") {
            document.getElementById("check_usernumber").innerHTML = wrong;
            document.getElementById("check_usernumber").innerHTML += '<label>&nbsp;学号不能为空</label>';
        } else if (usernumber.search(sPattern) == -1) {
            document.getElementById("check_usernumber").innerHTML = wrong;
            document.getElementById("check_usernumber").innerHTML += '<label>&nbsp;学号须为7位数字</label>';
        } else document.getElementById("check_usernumber").innerHTML = right;
    }
}

//添加论文输入框
function addInput(element) {
    var newElement = document.createElement("input");
    newElement.setAttribute("type", "text");
    newElement.setAttribute("name", "put_paper");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.appendChild(newElement);
    tr.appendChild(td1);
    tr.appendChild(td2);
    element.parentNode.parentNode.parentNode.insertBefore(tr, element.parentNode.parentNode);
}

//生成验证码
var code;
function createCode() {
    var expect = 4;
    var str = Math.random().toString(36).substring(2);
    while (str.length < expect) {
        str = Math.random().toString(36).substring(2)
    }
    code = document.getElementById("code");
    code.childNodes[0].innerHTML = str.substring(0, expect);
}

//验证验证码
function checkCode(input_number) {
    var coda = document.getElementById("code").childNodes[0].value;
    if (input_number == "") {
        document.getElementById("holder").innerHTML = wrong;
        document.getElementById("holder").innerHTML += '<label>&nbsp;请输入验证码</label>';
    } else if (input_number != coda) {
        document.getElementById("holder").innerHTML = wrong;
        document.getElementById("holder").innerHTML += '<label>&nbsp;验证码不正确，请重新输入</label>';
    } else {
        document.getElementById("holder").innerHTML = right;
    }
}


// 再次点下时清空标记
function validate_clear_id() {
    document.getElementById("warning_id").innerHTML = "";
}

function validate_clear_password() {
    document.getElementById("warning_password").innerHTML = "";
}

function validate_clear_password2() {
    document.getElementById("warning_password2").innerHTML = "";
}

function validate_clear_Pnumber() {
    document.getElementById("warning_Pnumber").innerHTML = "";
}

function validate_clear_code() {
    document.getElementById("check_Code").innerHTML = "";
}

function validate_clear_email() {
    document.getElementById("check_Email").innerHTML = "";
}

function validate_clear_usernumber() {
    document.getElementById("check_usernumber").innerHTML = "";
}

function validate_clear_ycode() {
    document.getElementById("holder").innerHTML = "";
}

//点击注册生成报表
function register(){
    var content = document.getElementById("content");
    var user_name = document.getElementsByName("user_name")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var tel_code = document.getElementsByName("tel_code")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var gender = document.getElementsByName("gender")[0].value;
    var user_type = document.getElementsByName("user_type")[0].value;
    var put_papers = document.getElementsByName("pur_paper");
    var tmp;
    for(var i=0;i<put_papers.length;i++){
        tmp.innerHTML += (put_papers[i].value+"<br>");
    }
    content.innerHTML="<h2>用户注册信息</h2><hr><table><tr><td>用户名：</td><td>"
    +user_name+"</td></tr><tr><td>密码：</td><td>"
    +password+"</td></tr><tr><td>关联手机号：</td><td>"
    +tel+"</td></tr><tr><td>手机验证码：</td><td>"
    +tel_code+"</td></tr><tr><td>保密邮箱：</td><td>"
    +email+"</td></tr><tr><td>性别：</td><td>"
    +gender+"</td></tr><tr><td>用户类型：</td><td>"
    +user_type+"</td></tr><tr><td>学号：</td><td>"
    +uNum+"</td></tr><tr><td>注册论文：</td><td>"
    +put_papers+"</td></tr></table>";
}