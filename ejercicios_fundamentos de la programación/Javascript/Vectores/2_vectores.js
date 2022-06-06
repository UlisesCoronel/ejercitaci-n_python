// Hacer un programa que solicite 50 números enteros y los guarde en un vector.
// Luego recorrer todos los elementos del vector y determinar cuál es el valor
// máximo y su posición dentro del vector.

let vector = [];

for (let i = 0; i < 50; i++) {
  let n = parseInt(prompt("Ingrese un número:"));
  vector.push(n);
}

let max = vector[0]
let maxPos = 0;

for (let i = 1; i < 50; i++) {
  if (max < vector[i]){
    max = vector[i]
    maxPos = i
  }
}

console.log(`El mayor valor es ${max}
y la posición del mismo en el vector es ${maxPos}
`)