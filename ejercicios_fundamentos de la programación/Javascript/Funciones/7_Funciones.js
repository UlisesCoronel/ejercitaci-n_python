// Hacer una función de tipo void (porque no va a devolver nada) llamada
// “positivoNegativoCero” que reciba un número por valor y una variable por
// referencia. Que analice el número y escriba variable recibida por referencia
// con:

// a. 1 si el número es positivo.
// b. -1 si el número es negativo.
// c. 0 si el número es cero.

// Hacer un programa main que permita ingresar 100 números y emitir por
// pantalla cuántos son positivos, cuántos negativos y cuántos cero.

function positivoNegativoCero (input){
  if (input < 0){
    ref = -1;
  } else if (input > 0){
    ref = 1;
  } else{
    ref = 0;
  }
}

var ref = 0;
let acuPositivo = 0;
let acuNegativo = 0;
let acuCero = 0;

for (let i =0; i<100; i++){
  let input = parseInt(prompt('Ingrese un número: '))
  positivoNegativoCero(input)
  console.log(ref)
  if (ref === 1){
    acuPositivo++
  } else if (ref === -1) {
    acuNegativo++
  } else {
    acuCero++
  }
}

console.log(`El número de positivos es ${acuPositivo}.
El número de negativos es ${acuNegativo}.
El número de ceros es ${acuCero}.
`)