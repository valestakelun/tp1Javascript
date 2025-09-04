//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1 = parseFloat(prompt('Ingresa el primer número:'));
const numero2 = parseFloat(prompt('Ingresa el segundo número:'));
const numero3 = parseFloat(prompt('Ingresa el tercer número:'));
if (numero1 >= numero2 && numero1 >= numero3) {
    document.writeln('El número mayor es: ' + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    document.writeln('El número mayor es: ' + numero2);
} else if (numero3 >= numero1 && numero3 >= numero2) {
    document.writeln('El número mayor es: ' + numero3);
} 