function sayYes() {
    alert("Your best choice is me :) ");
}

function sayNo() {
    let height = Math.round(Math.random() * window.innerHeight);
    let weight = Math.round(Math.random() * window.innerWidth);
    document.getElementById("btn-no").style.top = height + 'px';
    document.getElementById("btn-no").style.left = weight + 'px';
}