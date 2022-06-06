// Una empresa comercializa 15 tipos de artículos y por cada venta realizada
// genera un registro con los siguientes datos:
// • Número de artículo (1 a 15).
// • Cantidad vendida.
// Puede haber varios registros para el mismo artículo y el último se indica
// número de artículo igual a cero.
// Se pide determinar e informar:
// a. El número de artículo que más se vendió en total.
// b. Los números de artículos que no registraron ventas.
// c. La cantidad de unidades vendidas para el artículo número 10.

let reg = parseInt(prompt("Ingrese el número de registro: "));
let cantidad = parseInt(prompt("Ingrese la cantidad vendida: "));

// Setea los articulos en ventas 0
let articulos = [];
for (let i = 0; i < 15; i++) {
  articulos.push(0);
}

while (reg != 0) {
  articulos[reg - 1] = articulos[reg - 1] + cantidad;
  reg = parseInt(prompt("Ingrese el número de registro: "));
  cantidad = parseInt(prompt("Ingrese la cantidad vendida: "));
}

console.log(articulos);
let max = articulos[0];
let maxPos = 0;
let noVentas = [];
let ventasDiez = 0;

for (let i = 0; i < 15; i++) {
  if (articulos[i] === 0) {
    noVentas.push(i + 1);
  }
  if (i == 9) {
    ventasDiez = articulos[i];
  }
  if (max < articulos[i]) {
    max = articulos[i];
    maxPos = i;
  }
}

console.log(`El artículo mas vendido fue el número ${maxPos + 1}
Los articulos que no registraron ventas fueron ${noVentas}
La cantidad de ventas del producto Nº10 es: ${ventasDiez}
`);
