// Hacer una función llamada “pagos” que reciba un monto (float) y una cantidad
// de pagos (entero) y devuelva el monto de cada pago. Hacer un programa para
// ingresar 10 ventas. Para cada venta se conoce el monto y la cantidad de pagos.
// El programa deberá mostrar la cantidad de pagos y el monto del pago para
// cada una de las ventas.

for (let i = 0; i < 10; i++){
  let monto = parseFloat(prompt('Ingrese el monto del pago: '))
  let cp = parseInt(prompt("Ingrese la cantidad de cuotas del pago: "));

  let pagos = (monto,cp) => monto/cp;
  console.log(`La cantidad de pagos es: ${cp}
  y el monto de pago para cada venta es: ${pagos(monto,cp)}
  `)
}