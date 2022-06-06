// Hacer un programa que solicite una serie de valores de tipo char (caracteres).
// Se entiende por carácter a cada elemento que se obtiene de presionar una
// tecla. Por ejemplo el valor “25” tiene dos caracteres (si quisiéramos guardarlo
// en variables enteras nos alcanza con una, pero si queremos guardarlo en
// variables char, necesitaremos dos); la frase “maxi programa” tiene 13 (se
// incluye el espacio como un carácter).
// La cantidad de valores será como máximo 50, pero el programa puede cortar
// antes si se ingresa el carácter “.” (punto). Una vez cargado el vector de char,
// recorrerlo y reemplazar todas las apariciones de la letra “a” por la letra “e”,
// por ejemplo:
// Vector char original: “Hola muchachada cómo están”.
// Vector char modificado: “Hole muchechede cómo esten”
// Finalmente, mostrar el resultado en pantalla.
// Nota: necesitaremos un vector char de 50, pero no lo cargaremos con un For.

let charArray = [];
let acu = 0;
let char = prompt("Ingrese su primer caracter: ");

while (acu < 50 && char != ".") {
  charArray.push(char);
  char = prompt("Ingrese su siguiente caracter: ");
  acu++;
}

let acu2 = 0;
let frase = "";

for (let c of charArray) {
  if (c == "a") {
    c = "e";
  }
  acu2++;
  frase = frase + c;
}

console.log(charArray);
console.log(frase);
