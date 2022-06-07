// Se dispone de un lote de 300 registros (uno por artículo), cada uno de los cuales tiene la
// siguiente información:
// - Número de artículo (4 dígitos no correlativos).
// - Cantidad de unidades en stock.
// - Precio Unitario.
// El lote está desordenado.
// Se dispone de otro lote de registros, cada uno de los cuales corresponde a una venta con la siguiente
// información:
// - Número de cliente (1 a 300).
// - Número de artículo (4 dígitos, no correlativos).
// - Cantidad de unidades vendidas.
// El último registro de este lote tiene número de cliente cero y no debe procesarse. Desarrollar el
// programa que determine e imprima:
// a) Un listado de las ventas realizadas, con el siguiente formato:

// Listado de ventas

// Nro. Cliente   Nro. Artículo   Cantidad Vendida      Importe Total
//      99              99              999             999.99
// b) Informar cuál es el número de cliente que más compró en total (en pesos).
// c) Informar cada uno de los números de los artículos que no hayan registrado ventas.

let numeroArticulo = [];
let stockArticulo = [];
let precioArticulo = [];
let registroVentas = [];

// Setea lote de registro
for (let i = 0; i < 300; i++) {
  numeroArticulo.push(1000 + i); //Numera los artículos del 1000 al 1300
  stockArticulo.push(50); //Establece un stock de 50 a cada artículo
  precioArticulo.push(parseInt(Math.random() * (1000 - 0)) / 10); //setea un precio aleatorio
  registroVentas.push(false);
}

console.log(numeroArticulo);
console.log(precioArticulo);

let numeroCliente = parseInt(prompt("Ingrese el numero de cliente: "));
let numeroArticuloVendido = parseInt(prompt("Ingrese el numero de artículo: "));
let cantidadArticuloVendido = parseInt(
  prompt("Ingrese la cantidad de artículos vendidos: ")
);
let importeTotal = 0;

//Inicializo las compras totales en 0
let comprasTotalesCliente = [];
for (let i = 0; i < 300; i++) {
  comprasTotalesCliente.push(0);
}

while (numeroCliente !== 0) {
  // Calculo importe total por venta
  for (let i = 0; i < 300; i++) {
    if (numeroArticuloVendido === numeroArticulo[i]) {
      registroVentas[i] = true;
      importeTotal = cantidadArticuloVendido * precioArticulo[i];
    }
  }

  comprasTotalesCliente[numeroCliente - 1] =
    comprasTotalesCliente[numeroCliente - 1] + importeTotal;

  // Salida pto. 1
  console.log(`Nro. cliente:${numeroCliente}
  Nro. artículo:${numeroArticuloVendido}
  Cantidad vendida:${cantidadArticuloVendido}
  Importe total de la venta: ${importeTotal}
  `);

  numeroCliente = parseInt(prompt("Ingrese el numero de cliente: "));
  numeroArticuloVendido = parseInt(prompt("Ingrese el numero de artículo: "));
  cantidadArticuloVendido = parseInt(
    prompt("Ingrese la cantidad de artículos vendidos: ")
  );
}

let maximoComprador = 0;
let maximoCompradorNumero = 0;
let sinVentas = [];

for (let i = 0; i < 300; i++) {
  if (comprasTotalesCliente[i] != 0) {
    if (comprasTotalesCliente[i] > maximoComprador) {
      maximoComprador = comprasTotalesCliente[i];
      maximoCompradorNumero = i;
    }
  }
}

let sinVentasArray = [];

for (let i = 0; i < 300; i++) {
  if (registroVentas[i] !== true) {
    sinVentasArray.push(numeroArticulo[i]);
  }
}

console.log(`El cliente que más compró es el Nro: ${maximoCompradorNumero + 1}
y el monto total de compras es: ${maximoComprador} pesos

Los artúclos que no registraron ventas fueron: ${sinVentasArray}`);
