const cantidadElementos = parseInt(prompt('Ingrese la cantidad de elementos de tipo entero: ', ''));
const elementoNumero = new Array(cantidadElementos);
var mayor = 0;

for (let i = 0; i < elementoNumero.length; i++) {

    elementoNumero[i] = parseInt(prompt(`Ingrese el valor del elemento ${i + 1} : `, ''));
    if (elementoNumero[i] >= mayor) {
        mayor = elementoNumero[i];
    }
}

console.log(`El número mayo de los ingresados es: ${mayor}`);