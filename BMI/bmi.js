function showResult() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let bmi = weight / (2 * height);
    if (bmi <= 18) {
        document.getElementById("result").innerHTML = "Underweight";
    } else if (bmi <= 25) {
        document.getElementById("result").innerHTML = "Normal";
    } else if (bmi <= 30) {
        document.getElementById("result").innerHTML = "Overweight";
    } else {
        document.getElementById("result").innerHTML = "Obese";
    }
}