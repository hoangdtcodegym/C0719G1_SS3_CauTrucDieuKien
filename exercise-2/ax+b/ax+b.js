function showResult() {
    let a = parseInt(document.getElementById("a-of-equation").value);

    if (a == 0) {
        document.getElementById("result").innerHTML = "Ptr vô nghiệm. ";
        return;
    }

    let b = parseInt(document.getElementById("b-of-equation").value);

    if (b == 0) {
        document.getElementById("result").innerHTML = "Ptr vô số nghiệm. ";
        return;
    }

    document.getElementById("result").innerHTML = "Ptr có một nghiệm: x = " + (-b / a);
}