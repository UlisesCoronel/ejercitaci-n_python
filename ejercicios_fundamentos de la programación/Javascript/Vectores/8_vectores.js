// Se ingresa una lista de 20 números en un vector. Se pide ordenar dichos
// números en forma decreciente (de mayor a menor). Mostrar el listado
// ordenado informando también la posición original de cada número en el
// vector.
// Pista: usar ciclos combinados.

// Método de burbuja
function ordenarDecreciente(vector) {
  let aux = 0;
  let i = vector.length;
  for (let a = 0; a < i; a++) {
    for (let b = 0; b < i - 1; b++) {
      if (vector[b] < vector[b + 1]) {
        aux = vector[b + 1];
        vector[b + 1] = vector[b];
        vector[b] = aux;
      }
    }
  }
  return vector;
}

v = [];

for (let i = 0; i < 20; i++) {
  v.push(parseInt(prompt('Ingrese un número para la lista')))
}

let r = ordenarDecreciente(v);
console.log(r);
