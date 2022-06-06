// Hacer una función llamada “primo” que reciba un número entero y devuelva 1
// si el número es primo o cero si no lo es. Hacer un programa para ingresar
// números. El lote corta cuando se ingresa un número cero. Informar el
// promedio teniendo en cuenta sólo los números primos.

function primo(n) {
  let primoAcu = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      primoAcu++;
    }
  }
  if (primoAcu <= 2) {
    return 1;
  } else {
    return 0;
  }
}

let userInput = parseInt(prompt("Ingresá un número:"));
let primos = 0;
let primosSumatoria = 0;

while (userInput !== 0) {
  let r = primo(userInput);
  if (r === 1) {
    primos++;
    primosSumatoria += userInput;
  }
  userInput = parseInt(prompt("Ingresá un número:"));
}

console.log(primos);
console.log(primosSumatoria);
const promedio = primosSumatoria / primos;

console.log(promedio);
