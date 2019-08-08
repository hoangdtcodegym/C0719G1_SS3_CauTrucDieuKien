function showResult() {
    let a = parseInt(document.getElementById("a-of-rectangle").value);
    let b = parseInt(document.getElementById("b-of-rectangle").value);
    let area = a * b;
    document.getElementById("result").innerHTML = "Area = " + area;
}