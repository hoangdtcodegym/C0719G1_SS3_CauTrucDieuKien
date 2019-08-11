function tinhgoc() {
    let kimgio = parseFloat(document.getElementById("kimgio").value);
    let kimphut = parseFloat(document.getElementById("kimphut").value);
    if (kimgio>12)
        kimgio=kimgio-12;
    let gockimphut= kimphut*6;
    let gockimgiochuan = kimgio*30;
    let gockimgio = gockimgiochuan + kimphut*0.5 ;
    let goctao= Math.abs(gockimphut-gockimgio);
    document.getElementById("goctao").innerHTML =goctao ;
}