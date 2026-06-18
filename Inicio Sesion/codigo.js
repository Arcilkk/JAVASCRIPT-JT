let usuarioCorrecto = "admin";
let claveCorrecta = "1234";
let intentos = 0;

let formulario = document.getElementById("formulario");
let inputUsuario = document.getElementById("usuario");
let inputClave = document.getElementById("password");
let botonSubmit = document.getElementById("boton");
let parrafoMensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    let u = inputUsuario.value;
    let c = inputClave.value;

    if (u === usuarioCorrecto && c === claveCorrecta) {
        parrafoMensaje.style.color = "green";
        parrafoMensaje.textContent = "Acceso concedido.";
        botonSubmit.disabled = true;
    } else {
        intentos = intentos + 1;
        let restantes = 3 - intentos;

        if (intentos >= 3) {
            parrafoMensaje.style.color = "red";
            parrafoMensaje.textContent = "Bloqueado. Ha superado los 3 intentos.";
            
            // Deshabilitar todo
            inputUsuario.disabled = true;
            inputClave.disabled = true;
            botonSubmit.disabled = true;
        } else {
            parrafoMensaje.style.color = "orange";
            parrafoMensaje.textContent = "Incorrecto. Le quedan " + restantes + " intentos.";
            inputClave.value = ""; // Limpia la contraseña para reintentar
            
        }
    }
});