function showResult() {
    let a = parseInt(document.getElementById("a-of-triangle").value);
    let b = parseInt(document.getElementById("b-of-triangle").value);
    let c = parseInt(document.getElementById("c-of-triangle").value);

    if (a < 0 || b < 0 || c < 0) {
        document.getElementById("result").innerHTML = "Wrong input, a, b or c can not less than zero !";
        return;
    } else if (a + b > c && b + c > a && a + c > b) {
        document.getElementById("result").innerHTML = "Wrong input, this is not triangle";
    } else {
        document.getElementById("result").innerHTML = "This is triangle";
    }
}
