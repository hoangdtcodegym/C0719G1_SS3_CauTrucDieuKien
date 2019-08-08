function showResult() {
    let a = parseInt(document.getElementById("number-a").value);
    let b = parseInt(document.getElementById("number-b").value);
    if (a % b == 0) {
        document.getElementById("result").innerHTML = "a % b = 0";
    } else {
        document.getElementById("result").innerHTML = "a % b = " + a % b;
    }
}