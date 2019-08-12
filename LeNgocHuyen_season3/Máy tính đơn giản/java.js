// let a=document.getElementById('num1');

function display(value) {
    document.getElementById("num1").value += value;
}
function result() {
    let output = document.getElementById('num1').value;
    document.getElementById('num1').value = eval(output);
}
function clear() {
    document.getElementById('num1').value = '';
}