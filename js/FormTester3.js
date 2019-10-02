var wrong = '<img src="/image3/wrong.png">';
var more = '<img src="/image3/more.png">';
var right = '<img src="/image3/right.png">';
var question = '<img src="/image3/question.png">';

//检验用户名
function validate_username(id) {
    var usernameReg = /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,16}[a-zA-Z0-9]$/;
    if (id == "") {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>用户名不能为空</label>';
    } else if (id.search(usernameReg) == -1) {
        document.getElementById("warning_id").innerHTML = wrong;
        document.getElementById("warning_id").innerHTML += '<label>1.用户名由字母、数字、下划线、减号组成</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>2.用户名只能以数字、字母开头或结尾</label><br>';
        document.getElementById("warning_id").innerHTML += '<label>3.用户名长度为 4-18 字符</label>';
    } else document.getElementById("warning_id").innerHTML = right;
}

// '<label></label><br>'
// 检验密码
function validate_password(password) {
    var passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if (password == "") {
        document.getElementById("warning_password").innerHTML = wrong;
        document.getElementById("warning_password").innerHTML += '<label>密码不能为空</label>';
    } else if (password.search(passwordReg) == -1) {
        document.getElementById("warning_password").innerHTML = wrong;
        document.getElementById("warning_password").innerHTML += '<label>密码长度须大于6</label><br>';
        document.getElementById("warning_password").innerHTML += '<label>至少包括大小写字母和数字</label>';
    } else document.getElementById("warning_password").innerHTML = right;
}

// 检验第二次密码
function validate_password2(password2) {
    var password = document.getElementById("orign_password");
    if (password2 != password.value) {
        document.getElementById("warning_password2").innerHTML = wrong;
        document.getElementById("warning_password2").innerHTML += '<label>两次密码输入不一致</label>';
    } else document.getElementById("warning_password2").innerHTML = right;
}

// 检验手机号
function validate_Pnumber(Pnumber) {
    var PnumberReg = /^[1][0-9]{10}$/;
    if (Pnumber == ""){
        document.getElementById("warning_Pnumber").innerHTML = wrong;
        document.getElementById("warning_Pnumber").innerHTML += '<label>手机号不能为空</label>';
    } else if(Pnumber.search(PnumberReg)==-1){
        document.getElementById("warning_Pnumber").innerHTML = wrong;
        document.getElementById("warning_Pnumber").innerHTML += '<label>手机号格式不正确</label>';
    } else   document.getElementById("warning_Pnumber").innerHTML = right;
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