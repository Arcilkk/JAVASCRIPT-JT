let opc;
do {
opc = parseInt(prompt('MENÚ DE OPCIONES\n' +
    '1. Suma\n' +
    '2. Resta\n' + 
    '3. Multiplicacion\n' +
    '4. División\n' + 
    '5. Salir\n\n' +
    'Seleccione una opción: '
    ));
} while (opc != 5);

switch(opc){
    case 1:
        suma(); break;
    case 2:
        resta(); break;
    case 3:
        mult(); break;
    case 4:
        dividir(); break;
}

function suma(){
    let num1, num2, suma;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    suma = num1+num2;
    alert('El resultado de la suma es: '+suma);
}

function resta(){
    let num1, num2, resta;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    resta = num1-num2;
    alert('El resultado de la resta es: '+resta);
}

function mult(){
    let num1, num2, mult;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    mult = num1*num2;
    alert('El resultado de la mutiplicación es: '+mult);
}

function dividir(){
    let num1, num2, div;
    num1 = parseInt(prompt('Numero 1'));
    num2 = parseInt(prompt('Numero 2'));
    div = num1/num2;
    alert('El resultado de la división es: '+div);
}