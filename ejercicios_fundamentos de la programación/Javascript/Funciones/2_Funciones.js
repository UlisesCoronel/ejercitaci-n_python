// Hacer una función llamada “mayor” que reciba dos números enteros y
// devuelva el mayor de ellos o cero si son iguales.

function mayor(n1, n2) {
  if (n1 < n2) {
    console.log(n2);
    return n2;
  } else if (n1 > n2) {
    console.log(n1);
    return n1;
  } else {
    console.log(0);
    return 0;
  }
}

const n1 = parseInt(prompt("Ingrese el primer número:"));
const n2 = parseInt(prompt("Ingrese el segundo número:"));

resultado = mayor(n1, n2);

console.log(resultado);
