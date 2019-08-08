function yes() {
    alert ("Thank you");
}
function no() {
    let randomleft = Math.random() * window.innerWidth;
    let randomright =Math.random() * window.innerHeight;
    document.getElementById("no").style.left = randomleft + "px";
    document.getElementById("no").style.top = randomright + "px";
}