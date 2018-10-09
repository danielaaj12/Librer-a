// declarando modal
let modal = document.getElementById('modalSeccion');

// declarando botón para abrir modal
let abrir = document.getElementById("abrir");

//elemento button que cierra el modal 
let button = document.getElementsByClassName("cerrar")[0];

// función de botón para abrir modal
abrir.onclick = function() {
    modal.style.display = "block";
}

// función de cerrar botón
button.onclick = function() {
    modal.style.display = "none";
}
