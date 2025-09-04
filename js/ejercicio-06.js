//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const numero1 = parseFloat(prompt('Ingresa el primer número:'));
const numero2 = parseFloat(prompt('Ingresa el segundo número:'));
if (numero1 > numero2) {
    document.writeln('El número mayor es: ' + numero1);
} else if (numero2 > numero1) {
    document.writeln('El número mayor es: ' + numero2);
} 