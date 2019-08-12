let weight = parseFloat(prompt(" Hãy nhập cân nặng của bạn( đơn vị: kg): "))
let height = parseFloat(prompt("Hãy nhập chiều cao của bạn( đơn vị: m): "))
let bmi =(weight) / (height * height);
if (bmi < 18.5) {
    alert("Underweight");
} else if (bmi < 25.0) {
    alert("Normal");
} else if (bmi < 30.0) {
    alert("Overweight");
}else {
    alert("Obese");
}