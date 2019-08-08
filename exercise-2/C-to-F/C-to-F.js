function showResult() {
    let celsius = parseInt(document.getElementById("celsius").value);
    let fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("result").innerHTML = "Fahrenheit = " + fahrenheit;
}