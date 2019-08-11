function chiso() {
    let chieucao = parseFloat(document.getElementById("chieucao").value);
    let cannang = parseFloat(document.getElementById("cannang").value);
    let BMI = cannang / (chieucao * chieucao);
    if (BMI > 30)
        alert("Obese");
    else if (BMI >= 25)
        alert("OverWeight");
    else if (BMI >= 18.5)
        alert("Normal");
    else alert("UnderWeight");
}