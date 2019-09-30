var wrong = '<img src="/image3/wrong.png">';
var more = '<img src="/image3/more.png">';
var right = '<img src="/image3/right.png">';
var question = '<img src="/image3/question.png">';

function validate_username(id) {
    if (id == "") {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>用户名不能为空</label>';
    } else if (id == "1") {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>1.用户名由字母、数字、下划线、减号组成</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>2.用户名只能以数字、字母开头或结尾</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>3.用户名长度为 4-18 字符</label>';
    } else document.getElementById("warning_id").innerHTML = right;
}

function validate_clear_id() {
    document.getElementById("warning_id").innerHTML = "";
}
function validate_clear_password() {
    document.getElementById("warning_password").innerHTML = "";
}
function validate_clear_password2() {
    document.getElementById("warning_password2").innerHTML = "";
}

function validate_password(password) {
    //^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6-10}$		
    //测试密码：12345y  		
    var passwordReg = /^[0-9][a-zA-Z][0-9A-Za-z]{6-10}$/;
    if (password != "" && password.search(passwordReg) != -1) {
        document.getElementById("warning_password").innerHTML = "<font color='green' size='3px'>√密码格式正确</font>";
    } else {
        document.getElementById("warning_password").innerHTML = "<font color='red' size='3px'>密码格式错误</font>";
        alert("密码有6位，由数字和字母组成!");
    }
}