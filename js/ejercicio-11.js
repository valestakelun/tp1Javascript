//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible, hay que decir todos por los que es divisible
const numero = parseInt(prompt('Ingresa un número:'));
let mensaje = 'El número ' + numero + ' es divisible por: ';
let esDivisible = false;
if (numero % 2 === 0) {
    document.writeln('El número ' + numero + ' es divisible por 2 <br>');
}
if (numero % 3 === 0) {
    document.writeln('El número ' + numero + ' es divisible por el numero 3 <br>');
}
if (numero % 5 === 0) {
    document.writeln('El número ' + numero + ' es divisible por 5 <br>');
}
if (numero % 7 === 0) {
    document.writeln('El número ' + numero + ' es divisible por 7 <br>');
}