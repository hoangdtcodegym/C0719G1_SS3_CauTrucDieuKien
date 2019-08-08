function showResult() {
    let a = document.getElementById("number1").value;
    let b = document.getElementById("number2").value;
    let c = document.getElementById("number3").value;

    if(a > b && a > c) {
        document.getElementById("result").innerHTML = "Max: a = " + a;
    } else if ( b > a && b > c) {
        document.getElementById("result").innerHTML = "Max: b = " + b;
    } else {
        document.getElementById("result").innerHTML = "Max: c = " + c;
    }
}