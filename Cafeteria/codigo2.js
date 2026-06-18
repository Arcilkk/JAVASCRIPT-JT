function recogerDatos(){
    let nom, tel, correo, frec, dia;
    let cantA, cantAA, cantAAA, ctotal, vtotal, dcto=0, otrod=0, vfinal, totalPago;

    nom = document.getElementById("cliente").value;     //Se guarda el nombre del cliente en la variable nom
    tel = document.getElementById("tel").value;         //Se guarda el telefono del cliente en la variable tel
    correo = document.getElementById("email").value;    //Se guarda el correo del cliente en la variable correo
    frec = document.getElementById("frec").checked;     //Se guarda el estado del checkbox en la variable frec, si esta marcado se guarda true, si no esta marcado se guarda false
    cantA = document.getElementById("cantA").value;     //Se guarda la cantidad de huevos tipo A en la variable cantA
    cantAA = document.getElementById("cantAA").value;   //Se guarda la cantidad de huevos tipo AA en la variable cantAA
    cantAAA = document.getElementById("cantAAA").value; //Se guarda la cantidad de huevos tipo AAA en la variable cantAAA
    dia = document.getElementById("dia").value;         //Se guarda el día de compra en la variable dia, dependiendo del valor seleccionado se guardará 1, 2 o 3
    
    ctotal = parseInt(cantA) + parseInt(cantAA) + parseInt(cantAAA);//Se calcula el total de huevos comprados sumando las cantidades de cada tipo de huevo, se utiliza parseInt para convertir las cadenas de texto a números enteros
    vtotal = (parseInt(cantA)*600) + (parseInt(cantAA)*700) + (parseInt(cantAAA)*750);//Se calcula el valor total de la compra multiplicando la cantidad de cada tipo de huevo por su precio correspondiente, se utiliza parseInt para convertir las cadenas de texto a números enteros
    if(ctotal>=30 && ctotal<=45){//Se calcula el descuento dependiendo del total de huevos comprados, si el total de huevos comprados esta entre 30 y 45 se aplica un descuento del 10% sobre el valor total de la compra
        dcto = vtotal*0.1;
    } else if(ctotal>=46 && ctotal<=70){//Si el total de huevos comprados esta entre 46 y 70 se aplica un descuento del 15% sobre el valor total de la compra
        dcto = vtotal*0.15;
    } else if(ctotal>=71 && ctotal<=100){//Si el total de huevos comprados esta entre 71 y 100 se aplica un descuento del 20% sobre el valor total de la compra
        dcto = vtotal*0.2;
    } else if(ctotal>100){//Si el total de huevos comprados es mayor a 100 se aplica un descuento del 25% sobre el valor total de la compra
        dcto = vtotal*0.25;
    } else {//Si el total de huevos comprados es menor a 30 no se aplica ningún descuento
        dcto = 0;
    }
    if (frec===true){//Si el cliente es frecuente se aplica un descuento adicional del 2.5% sobre el valor total de la compra después de aplicar el descuento por cantidad de huevos comprados
        otrod = vtotal * 0.025;
        frec = ". Sí";
    } else {
        otrod = 0;
        frec = ". No";
    }

    vfinal = vtotal - dcto - otrod;//Se calcula el valor total de la compra después de aplicar los descuentos restando el descuento por cantidad de huevos comprados y el descuento adicional por ser cliente frecuente al valor total de la compra antes de descuentos 

    switch (dia){
        case "1":
            totalPago = vfinal+(vfinal*0.05);//Si el día de compra es lunes a viernes se aplica un recargo del 5% sobre el valor total de la compra después de aplicar los descuentos
            dia = "de Lunes a Viernes";
            break;
        case "2":
            totalPago = vfinal-(vfinal*0.05);//Si el día de compra es sábado se aplica un descuento del 5% sobre el valor total de la compra después de aplicar los descuentos
            dia = "Sábado";
            break;
        case "3":
            totalPago = vfinal; //Si el día de compra es domingo no se aplica ningún recargo ni descuento adicional sobre el valor total de la compra después de aplicar los descuentos
            dia = "Domingo";
            break;
    }

    alert(nom + ", compró " + cantA + " huevos tipo A, " + cantAA + " huevos tipo AA y " + cantAAA + " huevos tipo AAA, el día " + dia + frec + " es cliente frecuente." + "\nCompró un total de " + ctotal + " huevos por un valor de $" + vtotal + ", con un descuento de $" + dcto + " por cantidad de huevos comprados y un descuento adicional de $" + otrod + " por ser cliente frecuente, el valor total a pagar es de $" + totalPago);




    
    
    
    
    
    
}