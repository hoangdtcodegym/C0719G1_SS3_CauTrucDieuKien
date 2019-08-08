function showResult() {
    let basicSalary = parseInt(document.getElementById("basic-salary").value);
    let turnOver = parseInt(document.getElementById("turn-over").value);
    let commission = 0;
    if (turnOver <= 3000) {
        commission = 0;
        document.getElementById("result").innerHTML = "Basic salary: " + basicSalary + "<br>"
            + "Commission: " + commission + "<br>"
            + "Total salary: " + (basicSalary + commission) + "<br>"
    } else if (turnOver > 5000) {
        commission = turnOver * 0.1;
        document.getElementById("result").innerHTML = "Basic salary: " + basicSalary + "<br>"
            + "Commission: " + commission + "<br>"
            + "Total salary: " + (basicSalary + commission) + "<br>"
    } else if (turnOver > 10000) {
        commission = turnOver * 0.2;
        document.getElementById("result").innerHTML = "Basic salary: " + basicSalary + "<br>"
            + "Commission: " + commission + "<br>"
            + "Total salary: " + (basicSalary + commission) + "<br>"
    } else if (turnOver > 20000) {
        commission = turnOver * 0.4;
        document.getElementById("result").innerHTML = "Basic salary: " + basicSalary + "<br>"
            + "Commission: " + commission + "<br>"
            + "Total salary: " + (basicSalary + commission) + "<br>"
    }
}