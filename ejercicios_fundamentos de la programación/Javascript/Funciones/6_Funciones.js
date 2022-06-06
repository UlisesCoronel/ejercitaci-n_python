// Hacer una función que se llame “sumaResta” que reciba dos números y que
// devuelva la suma Y la resta del primer número con el segundo.
// Nota: recordemos que una función solo puede devolver UN valor por return.
// Cómo podríamos hacer para tener ambos resultados en el main?

function sumaResta (numA,numB){
  suma = numA + numB;
  resta = numA - numB;
}

// Se resuelve usando variables globales
var suma = 0;
var resta = 0;

let numA = parseInt(prompt('Ingrese el primer número: '));
let numB = parseInt(prompt("Ingrese el segundo número: ")); 

sumaResta(numA, numB)
console.log(`La suma de los números es ${suma} y su resta es ${resta}
`)