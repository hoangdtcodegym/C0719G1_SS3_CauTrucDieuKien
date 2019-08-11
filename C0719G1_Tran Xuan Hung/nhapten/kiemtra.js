function kiemtra(){
    let name = document.getElementById("name").value;
    let password= document.getElementById("password").value;
    if (name == "")
        alert("Please input username");
    else if ( name.length <6)
        alert("User name need more than 6 character");
    else if (password == "")
        alert("Please input password");
    else alert("Welcome");
}