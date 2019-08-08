
function doi(index) {
    let img = document.getElementById("img" + index);
    switch (img.alt) {
        case "cat" + index:
            img.alt = "monkey" + index;
            break;
        case "monkey" + index:
            img.alt = "panda" + index;
            break;
        case "panda" + index:
            img.alt = "cat" + index;
            break;
    }
    img.src = img.alt + ".jpg";
    check()
}

function check() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
    let img5 = document.getElementById("img5");
    if (img1.alt == "cat1" && img2.alt == "cat2" && img3.alt == "cat3" && img4.alt == "cat4" && img5.alt == "cat5" ||
        img1.alt == "monkey1" && img2.alt == "monkey2" && img3.alt == "monkey3" && img4.alt == "monkey4" && img5.alt == "monkey5" ||
        img1.alt == "panda1" && img2.alt == "panda2" && img3.alt == "panda3" && img4.alt == "panda4" && img5.alt == "panda5") {
        img1.style.boxShadow = "2px 3px 3px red";
        img2.style.boxShadow = "2px 3px 3px red";
        img3.style.boxShadow = "2px 3px 3px red";
        img4.style.boxShadow = "2px 3px 3px red";
        img5.style.boxShadow = "2px 3px 3px red";
    } else {
        img1.style.boxShadow = "2px 3px 3px black";
        img2.style.boxShadow = "2px 3px 3px black";
        img3.style.boxShadow = "2px 3px 3px black";
        img4.style.boxShadow = "2px 3px 3px black";
        img5.style.boxShadow = "2px 3px 3px black";
    }
}
