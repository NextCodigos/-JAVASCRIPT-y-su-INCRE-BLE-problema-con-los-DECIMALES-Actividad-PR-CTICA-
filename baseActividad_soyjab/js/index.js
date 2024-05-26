const INPUT1 = document.querySelector("#n1");
const INPUT2 = document.querySelector("#n2");

INPUT1.addEventListener("keydown", teclado);
INPUT2.addEventListener("keydown", teclado);

function teclado(event) {
  if (event.keyCode === 13) {
    // Check if both inputs are valid numbers (not empty or NaN)
    const N1 = Number(INPUT1.value.trim());
    const N2 = Number(INPUT2.value.trim());

    if (isNaN(N1) || N1 === 0) {
      // Check if N1 is empty or 0
      vaciar();
      return; // Exit if N1 is invalid
    }

    leer(); // Proceed to leer() if N1 is valid
  }
}

function leer() {
  const number1 = Number(INPUT1.value.trim());
  const number2 = Number(INPUT2.value.trim());

  // Check if both inputs are valid numbers (not NaN)
  isNaN(number1) || isNaN(number2) ? vaciar() : calcular(number1, number2);
}


function calcular(valor1, valor2) {
  // minuto 17:30
  vaciar();
  escribir(`<h2>${valor1} x ${valor2}</h2>`);
  escribir(`<strong>Cálculo original</strong>: ${valor1 * valor2}`);
  escribir(`<strong>Multiplicacion correcta</strong>:
     ${Number((valor1 * valor2).toFixed(2))}`);
  escribir(`<strong>Resta correcta</strong>:
     ${Number((valor1 - valor2).toFixed(2))}`);
  escribir(`<strong>Division correcta</strong>:
     ${Number((valor1 / valor2).toFixed(2))}`);
  escribir(`<strong>Suma correcta</strong>:
     ${Number((valor1 + valor2).toFixed(2))}`);
}

function escribir(valor) {
  reiniciar();
  document.querySelector(".resultado").innerHTML += valor + "<br>";
}


function reiniciar() {
  INPUT1.value = "";
  INPUT2.value = "1.1";
  INPUT1.focus();
}

function vaciar() {
  document.querySelector(".resultado").innerHTML = "";
}
