function showResult() {
    let age = document.getElementById("age").value;
    if(age < 16) {
        document.getElementById("result").innerHTML = "Not enough age to go to high school !";
    } else {
        document.getElementById("result").innerHTML = "Let's go to school !";
    }
}