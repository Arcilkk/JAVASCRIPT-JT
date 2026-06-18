// // EJERCICIO1   
// let unidad, cantidad, mi, km, mt;
// unidad = parseInt(prompt('Digite 1 para Millas - 2 para Kilometros - 3 para Metros'));
// cantidad = prompt('Digite la distancia a convertir');
// switch (unidad) {
//     case 1: 
//         km = cantidad * 1.6093;
//         mt = cantidad * 1609.34;
//         document.write(cantidad + ' Millas equivalen a ' + km + ' Kilometros y a ' + mt + ' Metros');
//         break;
//     case 2:
//         mi = cantidad * 0.621371;
//         mt = cantidad * 1000;
//         document.write(cantidad + ' Kilometros equivalen a ' + mi + ' Millas y a ' + mt + ' Metros');

//         break;
//     case 3:
//         mi = cantidad * 0.000621371;
//         km = cantidad * 0.001;
//         document.write(cantidad + ' Metros equivalen a ' + mi + ' Millas y a ' + km + ' Kilometros');

//         break;
//     default:
//         document.write('Valor INCORRECTO');
//         break;

// }

// EJERCICIO2
// let d1, d2, d3, d4, d5, d6, num, coc;
// num = prompt('Digite un numero del 1 al 6');
// d6 = num % 10;
// coc = Math.trunc(num / 10);
// d5 = coc % 10;
// coc = Math.trunc(coc/ 10);
// d4 = coc % 10;
// coc = Math.trunc(coc / 10);
// d3 = coc % 10;
// coc = Math.trunc(coc / 10);
// d2 = coc % 10;
// coc = Math.trunc(coc / 10);
// d1 = d5 = coc % 10;
// document.write(d6 +" " + d5 + " " + d4 + " " + d3 + " " + d2 + " " + d1);

//EJERCICIO 3
// let hh, mm, ss;

// hh = parseInt(prompt("Digite las horas"));
// mm = parseInt(prompt("Digite los minutos"));
// ss = parseInt(prompt("Digite los segundos"));

// ss = ss + 1;

// if (ss == 60) {
//     ss = 0;
//     mm = mm + 1;
// }

// if (mm == 60) {
//     mm = 0;
//     hh = hh + 1;
// }

// if (hh == 24) {
//     hh = 0;
// }

// document.write("La hora un segundo después es: " 
// + hh + ":" + mm + ":" + ss);

//EJERCICIO 4
// EJERCICIO 4
// let a, b, c, d, x1, x2;

// a = parseFloat(prompt("Digite el valor de a"));
// b = parseFloat(prompt("Digite el valor de b"));
// c = parseFloat(prompt("Digite el valor de c"));

// d = (b * b) - (4 * a * c);

// if (d > 0) {
//     x1 = (-b + Math.sqrt(d)) / (2 * a);
//     x2 = (-b - Math.sqrt(d)) / (2 * a);

//     document.write("Hay DOS soluciones reales <br>");
//     document.write("x1 = " + x1 + "<br>");
//     document.write("x2 = " + x2);
// }

// else if (d == 0) {
//     x1 = (-b) / (2 * a);

//     document.write("Hay UNA solucion real <br>");
//     document.write("x = " + x1);
// }

// else {
//     document.write("Hay DOS soluciones imaginarias");
// }

// //EJERCICIO 5
// let baja = 0;
// let media = 0;
// let alta = 0;

// while (true) {

//     let entrada = prompt("Ingrese una temperatura (99 o -99 para terminar):");

//     if (entrada === null) break;

//     let temperatura = parseInt(entrada);

   
//     if (temperatura === 99 || temperatura === -99) {
//         break;
//     }

  
//     if (isNaN(temperatura)) {
//         alert("Ingrese un número válido");
//         continue;
//     }

  
//     if (temperatura < 0) {
//         baja++;
//     } else if (temperatura <= 51) {
//         media++;
//     } else {
//         alta++;
//     }
// }


// alert(
//     "RESULTADOS:\n" +
//     "Temperatura baja (<=0°): " + baja + "\n" +
//     "Temperatura media (<=50°): " + media + "\n" +
//     "Temperatura alta (>=51°): " + alta
// );

// // Mostrar resultados
// document.write("Temperaturas menores a 0: " + menores + "<br>");
// document.write("Temperaturas iguales a 0: " + iguales + "<br>");
// document.write("Temperaturas mayores a 0: " + mayores)

//EJERCICIO 6
// // Programa radar aeronaves

// let numero;
// let d1, d2, d3, d4;

// numero = prompt("Digite un número de 4 dígitos:");

// // Validar que tenga exactamente 4 dígitos numéricos
// if (numero.length != 4 || isNaN(numero)) {

//     document.write("ERROR: Debe ingresar un número válido de 4 dígitos");

// } else {

//     // Separar dígitos
//     d1 = parseInt(numero[0]);
//     d2 = parseInt(numero[1]);
//     d3 = parseInt(numero[2]);
//     d4 = parseInt(numero[3]);

//     // Primer dígito
//     if (d1 % 2 == 0) {
//         document.write("Hay una aeronave en el aire<br>");
//     } else {
//         document.write("No hay aeronave en el aire<br>");
//     }

//     // Segundo dígito -> tipo de aeronave
//     switch (d2) {

//         case 1:
//             document.write("Tipo: Avión militar<br>");
//             break;

//         case 2:
//             document.write("Tipo: Avión civil de carga<br>");
//             break;

//         case 3:
//             document.write("Tipo: Avión civil de pasajeros<br>");
//             break;

//         case 4:
//             document.write("Tipo: Aeronave sin permiso<br>");
//             break;

//         case 5:
//             document.write("Tipo: Aeronave de supertransporte<br>");
//             break;

//         case 6:
//             document.write("Tipo: Aeronave enemiga<br>");
//             break;

//         case 7:
//             document.write("Tipo: Avión mixto<br>");
//             break;

//         case 8:
//             document.write("Tipo: Helicóptero<br>");
//             break;

//         case 9:
//             document.write("Tipo: Globo aerostático<br>");
//             break;

//         case 0:
//             document.write("Tipo: Dirigible<br>");
//             break;
//     }

//     // Tercer dígito -> distancia
//     document.write("Distancia: " + d3 + " km<br>");

//     // Cuarto dígito -> dirección
//     if (d4 == 0 || d4 == 1) {
//         document.write("Dirección: Norte");
//     }
//     else if (d4 == 2 || d4 == 3) {
//         document.write("Dirección: Sur");
//     }
//     else if (d4 == 4 || d4 == 5) {
//         document.write("Dirección: Oriente");
//     }
//     else if (d4 == 6 || d4 == 7) {
//         document.write("Dirección: Occidente");
//     }
//     else {
//         document.write("Dirección: Desconocida");
//     }
// }