function showResult() {
    let a = parseInt(document.getElementById("a-of-square").value);
    let area = a * a;
    document.getElementById("result").innerHTML = "Area = " + area;
}