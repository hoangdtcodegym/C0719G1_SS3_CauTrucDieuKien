function showResult() {
    let age = parseInt(document.getElementById("age").value);
    if(age > 0 && age < 120) {
        document.getElementById("result").innerHTML = "This is age of a person. ";
    } else {
        document.getElementById("result").innerHTML = "This is not age of a person. ";
    }
}