function validate_username(id) {
    var emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (id != "" && id.search(emailReg) != -1) {
        document.getElementById("test_user").innerHTML = "<p color='green' size='3px'>√邮箱格式正确</p>";
    } else {
        document.getElementById("test_user").innerHTML = "<p color='red' size='3px'>邮箱格式错误</p>";
    }
}