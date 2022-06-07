// 1. Una empresa que fabrica 20 artículos tiene la siguiente información para cada uno de ellos:

// - Código de Artículo (4 dígitos, no correlativos).
// - Precio Unitario.

// Este primer lote no se encuentra ordenado.
// Cuenta por otro lado con un lote de registros con las ventas del año anterior. Cada registro contiene
// la siguiente información:

// - Número de Cliente (1 a 300).
// - Código de Artículo (4 dígitos no correlativos).
// - Mes (1 a 12).
// - Día (1 a 31).
// - Cantidad vendida.

// Puede haber más de un registro para el mismo artículo. El lote finaliza con un registro con número de
// cliente igual a cero.

// Se pide:
// a) Un listado con el siguiente formato:

// Código de Artículo       Cantidad Total Vendida
//        999                       999

// Este listado debe salir ordenado de mayor a menor por cantidad total vendida.
// b) Informar, si los hubiera, los nombres de los meses en que no hubo ventas.
// c) Informar los códigos de los artículos cuyas ventas en cantidad son mayores al promedio.

function ordenarDecreciente() {
  let aux = 0;
  let auxDos = 0;
  let i = cantidades.length;
  for (let a = 0; a < i; a++) {
    for (let b = 0; b < i - 1; b++) {
      if (cantidades[b] < cantidades[b + 1]) {
        aux = cantidades[b + 1];
        auxDos = codigo[b + 1];

        cantidades[b + 1] = cantidades[b];
        codigo[b + 1] = codigo[b];

        cantidades[b] = aux;
        codigo[b] = auxDos;
      }
    }
  }
}

let codigoArticulo = [];
let precioUnitario = [];
let ventasTotales = [];
let mesesVentas = [];
let acuVentas = 0;

// Carga de datos
for (let i = 0; i < 20; i++) {
  ventasTotales.push(0);
  codigoArticulo.push(
    parseInt(prompt("Ingrese el código del artículo nº" + String(i + 1) + ":"))
  );
  precioUnitario.push(
    parseInt(
      prompt("Ingrese el precio unitario del artículo nº" + String(i + 1) + ":")
    )
  );
}

// Inicialización variables ventas
for (let i = 0; i < 12; i++) {
  mesesVentas.push(false);
}

let numeroCliente = parseInt(
  prompt(`Se comienzan a cargar las ventas.
Ingrese el número de cliente:`)
);
let codigoArtInput = parseInt(prompt("Ingrese el código del artículo:"));
let mes = parseInt(prompt("Ingrese el mes en que se realizó la venta:"));
let dia = parseInt(prompt("Ingrese el día en que se realizó la venta:"));
let cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));

while (numeroCliente !== 0) {
  for (let i = 0; i < 20; i++) {
    if (codigoArtInput === codigoArticulo[i]) {
      ventasTotales[i] = ventasTotales[i] + cantidad;
      acuVentas = acuVentas + cantidad;
    }
  }

  mesesVentas[mes - 1] = true;

  numeroCliente = parseInt(prompt("Ingrese el número de cliente:"));
  codigoArtInput = parseInt(prompt("Ingrese el código del artículo:"));
  mes = parseInt(prompt("Ingrese el mes en que se realizó la venta:"));
  dia = parseInt(prompt("Ingrese el día en que se realizó la venta:"));
  cantidad = parseInt(prompt("Ingrese la cantidad vendida:"));
}

var cantidades = ventasTotales;
var codigo = codigoArticulo;
ordenarDecreciente();

let promedio = acuVentas / 20;
let superaPromedio = [];

for (let i = 0; i < 20; i++) {
  if (cantidades[i] > promedio) {
    superaPromedio.push(codigo[i]);
  }
}

for (let i = 0; i < 20; i++) {
  console.log(
    `Código del artículo: ${codigo[i]}. Cantidad total vendida: ${cantidades[i]}`
  );
}

console.log(
  "Los artículos que superan el promedio de ventas son:" + superaPromedio
);

// Mostrar meses sin ventas
let sinVentas = "Meses sin ventas: ";
for (let i = 0; i < 12; i++) {
  if (mesesVentas[i] == false) {
    switch (i) {
      case 0:
        sinVentas = sinVentas + "enero,";
        break;
      case 1:
        sinVentas = sinVentas + " febrero,";
        break;
      case 2:
        sinVentas = sinVentas + " marzo,";
        break;
      case 3:
        sinVentas = sinVentas + " abril,";
        break;
      case 4:
        sinVentas = sinVentas + " mayo,";
        break;
      case 5:
        sinVentas = sinVentas + " junio,";
        break;
      case 6:
        sinVentas = sinVentas + " julio,";
        break;
      case 7:
        sinVentas = sinVentas + " agosto,";
        break;
      case 8:
        sinVentas = sinVentas + " septiembre,";
        break;
      case 9:
        sinVentas = sinVentas + " octubre,";
        break;
      case 10:
        sinVentas = sinVentas + " noviembre,";
        break;
      case 11:
        sinVentas = sinVentas + " diciembre.";
        break;
    }
  }
}

console.log(sinVentas);
