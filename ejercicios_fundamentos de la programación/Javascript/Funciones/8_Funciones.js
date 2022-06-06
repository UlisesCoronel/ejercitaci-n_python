// Hacer un programa que permita ingresar una lista de números que corta
// cuando se ingresa un cero. A partir de dichos datos informar:
// a. El mayor de los números pares.
// b. La cantidad de números impares.
// c. El menor de los números primos.
// Hacer uso de las funciones anteriormente desarrolladas.

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

function par(numInput) {
  if (numInput % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}

let n = parseInt(prompt("Ingresá un número:"));
let pb = true;
let menorPrimo = NaN;
let parb = true;
let mayorPar = NaN;
let acuImpares = 0;

while (n !== 0) {
  let p = primo(n);
  if (p === 1 && pb === true) {
    menorPrimo = n;
    pb = false;
  } else if (p === 1 && menorPrimo > n) {
    menorPrimo = n;
  }

  let numPar = par(n);
  if (numPar === 1 && parb === true) {
    mayorPar = n;
    parb = false;
  } else if (numPar === 1 && mayorPar < n) {
    mayorPar = n;
  } else if (numPar === 0) {
    acuImpares++;
  }

  n = parseInt(prompt("Ingresá un número:"));
}

console.log(` El mayor de los pares es ${mayorPar}
La cantidad de impares es ${acuImpares}
El menor de los primos es ${menorPrimo}
`)
