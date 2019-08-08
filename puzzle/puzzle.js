let arrFirstColumn = ["images/funny-cat1_part1x1.jpg", "images/monkey_part1x1.jpg", "images/panda_swap_part1x1.jpg"];
let arrSecondColumn = ["images/funny-cat1_part2x1.jpg", "images/monkey_part2x1.jpg", "images/panda_swap_part2x1.jpg"];
let arrThirdColumn = ["images/funny-cat1_part3x1.jpg", "images/monkey_part3x1.jpg", "images/panda_swap_part3x1.jpg"];
let arrFouthColumn = ["images/images/funny-cat1_part4x1.jpg", "images/monkey_part4x1.jpg", "images/panda_swap_part4x1.jpg"];
let arrFifthColumn = ["images/funny-cat1_part5x1.jpg", "images/monkey_part5x1.jpg", "images/panda_swap_part5x1.jpg"];

function check() {

}

function changeImageFirstColumn() {
    let a = Math.floor(Math.random() * arrFirstColumn.length);
    document.getElementById("img1").src = arrFirstColumn
}

function changeImageSecondColumn() {
    let a = Math.floor(Math.random() * 2);
}

function chageImageThirdColumn() {
    let a = Math.floor(Math.random() * 2);
}

function changeImageFouthColumn() {
    let a = Math.floor(Math.random() * 2);
}

function changeImageFifthColumn() {
    let a = Math.floor(Math.random() * 2);
}