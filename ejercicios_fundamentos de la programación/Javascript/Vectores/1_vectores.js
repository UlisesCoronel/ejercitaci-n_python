// Hacer un programa que solicite 50 números enteros y los guarde en un vector.
// Luego recorrer el vector y determinar e informar cuál es la suma de los valores
// del mismo.
// Nota: usar dos ciclos: uno para guardar los números en el vector y otro para
// recorrerlo y leerlo.

let vector = [];
let total = 0;

for (let i = 0; i < 50; i++) {
  let n = parseInt(prompt("Ingrese un número:"));
  vector.push(n);
}

for (let i = 0; i < 50; i++) {
  total = total + vector[i];
}

console.log(vector);
console.log(total);
