function showResult() {
    let examGrade = document.getElementById("exam-grade").value;
    let midSeasonGrade = document.getElementById("mid-season-grade").value;
    let lastSeasonGrade = document.getElementById("last-season-grade").value;
    let avg = (examGrade + midSeasonGrade + lastSeasonGrade)/3;
    if(avg >= 9) {
        document.getElementById("result").innerHTML = "A";
    } else if(avg >=8) {
        document.getElementById("result").innerHTML = "B";
    } else if(avg >= 6.5) {
        document.getElementById("result").innerHTML = "C";
    } else if(avg >= 5) {
        document.getElementById("result").innerHTML = "D";
    } else if(avg >= 3.5) {
        document.getElementById("result").innerHTML = "E";
    } else {
        document.getElementById("result").innerHTML = "F";
    }
}