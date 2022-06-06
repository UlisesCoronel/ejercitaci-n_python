// 3. Hacer una función llamada “par” que reciba un número entero y devuelva 1 si
// es par o cero si no lo es. Hacer un programa para ingresar 20 números y
// mostrar por pantalla cuántos son pares.

let acuPar = 0;

function par(numInput) {
  if (numInput % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

for (let i = 0; i<5; i++) {

  let numInput = parseInt(prompt("Ingrese un número: "));
  let r = par(numInput);
  if (r === 1){
    acuPar++;
  }
}

console.log(acuPar);
