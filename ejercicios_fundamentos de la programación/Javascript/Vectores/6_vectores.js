// Dada una lista de 10 números, cargarlos en un vector. Luego detectar si en el
// vector hay algún elemento repetido. De haberlo, indicarlo con un cartel
// aclaratorio “Hay repetidos”, de lo contrario indicar “No hay repetidos”.
// Pista: usar ciclos combinados.

let vector = [];

for (let i = 0; i < 10; i++) {
  vector.push(parseInt(prompt("Ingrese un número: ")));
}

let repetido = false;

for (let i = 0; i < 9; i++) {
  for (let a = i + 1; a < 10; a++) {
    if (vector[i] == vector[a]) {
      repetido = true;
    }
  }
}

if (repetido) {
  console.log("Hay números repetidos");
} else {
  console.log("NO hay números repetidos");
}
