const colorSelector = document.querySelector("#colorSelector");
const button = document.querySelector(".button");
const colorSelected = document.querySelector(".colorSelected");
const colorBox = document.querySelector("#colorBox");
const clipboardP = document.querySelector(".clipboard");

button.addEventListener("click", () => {
  colorSelected.textContent = colorSelector.value;
  colorBox.style.backgroundColor = colorSelector.value;
  console.log(colorBox)

  clipboardP.textContent = "¡Color copiado al portapapeles!";

  navigator.clipboard
    .writeText(colorSelector.value)
    .catch((e) => console.log(e))
});
