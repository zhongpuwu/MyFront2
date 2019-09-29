
var wrong='<img src="/image3/wrong.png">';
var more='<img src="/image3/more.png">';
var right='<img src="/image3/right.png">';
var question='<img src="/image3/question.png">';

function validate_username(id) {
    if(id==""){
        document.getElementById("warning").innerHTML=wrong;
        document.getElementById("warning").innerHTML+='<label>用户名不能为空</label>';
    }else if(id=="1"){
        document.getElementById("warning").innerHTML=wrong;
        document.getElementById("warning").innerHTML+='<label>1.用户名由字母、数字、下划线、减号组成</label><br>';
        document.getElementById("warning").innerHTML+='<label>2.用户名只能以数字、字母开头或结尾</label><br>';
        document.getElementById("warning").innerHTML+='<label>3.用户名长度为 4-18 字符</label>';
    }else document.getElementById("warning").innerHTML=right;
}
function validate_clear(){
    document.getElementById("warning").innerHTML="";
}