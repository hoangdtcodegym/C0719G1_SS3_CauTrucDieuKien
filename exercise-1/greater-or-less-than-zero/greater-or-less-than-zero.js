function showResult() {
    let number = document.getElementById("number").value;
    if (number < 0) {
        document.getElementById("result").innerHTML = "The number less than 0 !";
    } else if (number > 0) {
        document.getElementById("result").innerHTML = "The number greater than 0 !";
    } else {
        document.getElementById("result").innerHTML = "The number  equal 0 !";

    }
}