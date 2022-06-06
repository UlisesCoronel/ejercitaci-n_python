// Hacer un programa que solicite 100 números enteros y los guarde en un
// vector. Luego recorrer ese vector para calcular el promedio. Mostrar por
// pantalla los valores del vector que son mayores al promedio calculado.

let vector = [];
let acu = 0;

for (let i = 0; i < 10; i++) {
  let n = parseInt(prompt("Ingrese un número:"));
  vector.push(n);
  acu += n;
}
console.log(acu);
let promedio = acu / 10;

for (let i = 0; i < 10; i++) {
  if (vector[i] > promedio) {
    console.log(vector[i]);
  }
}

console.log(promedio);
