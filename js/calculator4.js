var flag_point = true;
var flag_percent = true;
var flag_operator = false;
var a = 0;
var b = 0;
var p = "";
var temp = "";

function TypeIn(Num) {
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var operator = ["+", "-", "*", "/"];
    var l1 = document.getElementById("l1");
    if (numbers.includes(Num)) {
        if (l1.value == "NaN" || l1.value == "undefined" || l1.value == "0" || l1.value == "Infinity") {
            Reset();
            l1.value = "";
            l1.value += Num;
            a = Number(l1.value);
        } else {
            if (flag_operator) {
                temp += Num;
                b = Number(temp);
                l1.value += Num;
            } else {
                l1.value += Num;
                a = Number(l1.value);
            }
        }
    } else if (operator.includes(Num)) { // 输入了一个运算符
        if (l1.value == "undefined" || l1.value == "Infinity" || l1.value == "NaN")
            return;
        if (flag_operator && temp != "") { // 结果框包含运算符
            TypeIn("=");
            TypeIn(Num);
        } else if (p == "") { // 不包含运算符
            p = Num;
            l1.value += Num;
            flag_operator = true;
            flag_percent = true;
            flag_point = true;
        } else { // 有运算符但没数字
            p = Num;
            l1.value = l1.value.slice(0, -1);
            l1.value += Num;
        }
    } else {
        switch (Num) {
            case "C":
                l1.value = "0";
                Reset();
                break;
            case "+/-":
                if (!flag_operator) {
                    l1.value *= -1;
                } else {
                    b = temp;
                    l1.value = Operate(a, p, b);
                    Reset();
                    l1.value *= -1;
                }
                break;
            case "=":
                if (flag_operator) {
                    l1.value = Operate(a, p, b);
                    Reset();
                    a = l1.value;
                }
                break;
            case "%":
                if (flag_percent && p == "") {
                    a = a * 0.01;
                    l1.value += "%";
                    flag_percent = false;
                    TypeIn("+");
                } else if (flag_percent && p != "") {
                    b *= 0.01;
                    l1.value += "%";
                    flag_percent = false;
                    setTimeout('TypeIn("=")', "1000");
                }
                break;
            case ".":
                if (flag_point && p == "") {
                    l1.value += ".";
                    flag_point = false;
                } else if (flag_point && p != "") {
                    l1.value += ".";
                    temp += ".";
                    flag_point = false;
                }
                break;
        }
    }
}

function Operate(a, p, b) {
    switch (p) {
        case "+":
            return Number(a) + Number(b);
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return parseFloat(a) / b;
        default:
            Reset();
            return NaN;
    }
}

function Reset() {
    a = 0;
    b = 0;
    p = "";
    temp = "";
    flag_operator = false;
    flag_percent = true;
    flag_point = true;
}