function showResult() {
    let meter = parseInt(document.getElementById("meter").value);
    let ft = meter * 3.2808;
    document.getElementById("result").innerHTML = "Feet = " + ft;

}