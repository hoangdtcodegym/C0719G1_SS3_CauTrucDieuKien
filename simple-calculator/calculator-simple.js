function showResult() {
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

function inputNumber(value) {
    document.getElementById("result").value += value;
}

function clearAC() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = '';
}

function clearC() {
    let result = document.getElementById("result");
    result.value = result.value.substring(0, result.value.length - 1);
}