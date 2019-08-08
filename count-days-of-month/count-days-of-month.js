function result() {
    let month = parseInt(document.getElementById("month").value);
    let months = ["January","February","March", "April","May","June","July","August","September","October","November","December"]
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML = months[month-1] + " has 31 days !";
            break;
        case 2:
            document.getElementById("result").innerHTML = months[month-1] + " has 28 or 29 days !";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML = months[month-1] + " has 30 days !";
            break;
        default:
            document.getElementById("result").innerHTML = "Wrong input, input again";
            break;
    }
}