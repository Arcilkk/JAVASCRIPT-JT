function procesar() {
    const tipo = document.getElementById("tipo").value;
    const placa = document.getElementById("placa").value;
    const ingreso = document.getElementById("ingreso").value;
    const salida = document.getElementById("salida").value;

    if (!placa || !ingreso || !salida) {
        alert("Por favor llena todos los campos");
        return;
    }

    const fechaIngreso = new Date(ingreso);
    const fechaSalida = new Date(salida);

    if (fechaSalida <= fechaIngreso) {
        alert("La hora de salida debe ser mayor");
        return;
    }

    const minutos = Math.ceil((fechaSalida - fechaIngreso) / (1000 * 60));

    let tarifa = tipo === "automovil" ? 125 : 95;

    let valor = minutos * tarifa;

    // Ajuste a múltiplos de 50 (a favor del parqueadero)
    valor = Math.ceil(valor / 50) * 50;

    document.getElementById("resultado").innerHTML =
        `Placa: ${placa} <br>
         Minutos: ${minutos} <br>
         Total a pagar: $${valor}`;
}