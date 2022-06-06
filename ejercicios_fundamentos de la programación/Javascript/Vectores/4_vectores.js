// Dada una lista de 10 números enteros, cargarlos en un vector. Luego,
// determinar e informar si el vector está ordenado en forma creciente. Por
// ejemplo el vector con los valores 1, 3, 5, 7 y 9 está ordenado; el vector 1, 5, 3, 7
// y 9 no lo está.

let vector = [];

for (let i = 0; i < 10; i++) {
  vector.push(parseInt(prompt("Ingrese un número:")));
}

let ordenado = true;

for (let i = 1; i < 10; i++) {
  if (vector[i] < vector[i - 1]) {
    ordenado = false;
  }
}

if (ordenado) {
  console.log("el vector está ordenado");
} else {
  console.log("el vector NO está ordenado");
}

console.log(vector);
