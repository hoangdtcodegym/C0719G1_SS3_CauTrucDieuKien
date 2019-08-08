function goc() {
    let hour = parseInt(document.getElementById("hour").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let a = (hour * 30) + ((minutes / 60) * 30);
    let b = (minutes / 60) * 360;
    if (a > b) {
        let a1 = a - b;
        document.getElementById("results").innerHTML = "Góc giữa kim giờ và kim phút là " + a1 + " độ";
    }
    else {
        let b1 = b - a;
        document.getElementById("results").innerHTML = "Góc giữa kim giờ và kim phút là " + b1 + " độ";
    }
}