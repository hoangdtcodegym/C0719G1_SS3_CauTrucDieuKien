function showResult() {
    let a = parseInt(document.getElementById("a-of-equation").value);
    let b = parseInt(document.getElementById("b-of-equation").value);
    let c = parseInt(document.getElementById("c-of-equation").value);
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerHTML = "Ptr có 2 nghiệm phân biệt là: <br>x1 = " + x1 + "<br>x2 = " + x2;
    } else if (delta == 0) {
        let x1 = -b / (2 * a);
        document.getElementById("result").innerHTML = "Ptr có 2 nghiệm kép là x1, x2 = " + x1;
    } else {
        document.getElementById("result").innerHTML = "Ptr vô nghiệm. ";
    }
}