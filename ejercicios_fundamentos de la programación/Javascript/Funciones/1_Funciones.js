// Hacer una función llamada “producto” que reciba dos números enteros y que
// devuelva el producto de ambos. Luego hacer un programa que pida el precio
// de un artículo y la cantidad vendida y muestre por pantalla el monto total a
// pagar. Usar la función.

function producto(n1, n2) {
  let r = n1 * n2;
  return r;
}

const n1 = prompt("Ingrese el primer número:");
const n2 = prompt("Ingrese el segundo número:");

const p = producto(n1, n2);
console.log("el producto es: " + p);
