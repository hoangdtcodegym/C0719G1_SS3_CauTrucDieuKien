function myFunction(name) {
    let goodCheckBox = document.getElementById("good");
    let cheapCheckBox = document.getElementById("cheap");
    let fastCheckBox = document.getElementById("fast");
    switch (name) {
        case "good":
            if (goodCheckBox.checked && cheapCheckBox.checked) {
                fastCheckBox.checked = false;
            }
            break;
        case "cheap":
            if(cheapCheckBox.checked && fastCheckBox.checked) {
                goodCheckBox.checked = false;
            }
            break;
        case "fast":
            if(fastCheckBox.checked && goodCheckBox.checked) {
                cheapCheckBox.checked = false;
            }
            break;
    }
}