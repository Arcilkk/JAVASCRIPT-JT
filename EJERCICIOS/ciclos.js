// let num = 1
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// console.log(num);
// num += 1;
// let num = 100 //Valor inicial
// while (num>=0){ //Condicion VERDADERA
//     console.log(num);
//     num -= 10;
// }
// let num = 2;        //Valor Inicial
// do{
//     console.log(num);
//     num += 2;       //Incremento
// }while(num<=30);    //Condición Final
// for(let num=1;num<=30;num+=2){
//     console.log(num);
// }
let tipo1, tipo2, tipo3, cant1, cant2, cant3, cantTotal, precioT;
let frec, dia;
do{
cant1 = prompt('Cantidad de huevo tipo A: ');

}while(cant1<0);
do{
cant2 = prompt('Cantidad de huevo tipo AA: ');

}while(cant2<0);
do{
cant3 = prompt('Cantidad de huevo tipo AAA: ');

}while(cant3<0);
do{
    frec = prompt('Si es cliente frecuente digite 1, si no lo es digite 0: ');
}while(frec!=1 && frec!=0);
do{
    dia = prompt('Digite 1 si compró de Lunes a Viernes, digite 2 si compró el Sábado, digite 3 si compró el Domingo: ');
}while(dia!=1 || dia>3);