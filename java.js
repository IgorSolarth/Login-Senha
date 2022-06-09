function myFunction() {
    var mostrar = document.getElementById("password");
    if (mostrar.type === "password"){
        mostrar.type = "text";
        document.getElementById('hide').style.display = "inline-block";
        document.getElementById('hide').style.display = "none";
    }
    else {
        mostrar.type = "password"
        document.getElementById('hide').style.display = "none";
        document.getElementById('hide').style.display = "inline-block";
    }
}