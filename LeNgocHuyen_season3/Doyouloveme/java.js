function yes() {
    alert("<3");
}
function no() {
    let a = Math.round(Math.random()*window.innerHeight);
    let b = Math.round(Math.random()*window.innerWidth);
    but = document.getElementById("button1");
    but.style.left = a+'px';
    but.style.top = b +'px';
}
