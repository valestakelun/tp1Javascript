//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7, sólo hay que comprobar si lo es por uno de los cuatro
const numero = parseInt(prompt('Ingresa un número:'));
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
    document.writeln('El número ' + numero + ' es divisible por uno de estos numeros primos 2, 3, 5 o 7');
    }