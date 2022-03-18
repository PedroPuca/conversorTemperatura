function cParaF() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmC = parseFloat(valor);

  var valorEmF = (valorEmC * 9) / 5 + 32;
  console.log(valorEmF);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmF + "°F";
  elementoValorConvertido.innerHTML = valorConvertido;
}
////////////////////////////
function fParaC() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmF = parseFloat(valor);

  var valorEmC = ((valorEmF - 32) * 5) / 9;
  console.log(valorEmC);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmC + "°C";
  elementoValorConvertido.innerHTML = valorConvertido;
}
////////////////////////////
function cParaK() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmC = parseFloat(valor);

  var valorEmK = valorEmC + 273.15;
  console.log(valorEmK);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmK + " K";
  elementoValorConvertido.innerHTML = valorConvertido;
}
////////////////////////////
function kParaC() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmK = parseFloat(valor);

  var valorEmC = valorEmK - 273.15;
  console.log(valorEmC);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmC + "°C";
  elementoValorConvertido.innerHTML = valorConvertido;
}
////////////////////////////
function fParaK() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmF = parseFloat(valor);

  var valorEmK = ((valorEmF - 32) * 5) / 9 + 273.15;
  console.log(valorEmK);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmK + " K";
  elementoValorConvertido.innerHTML = valorConvertido;
}
////////////////////////////
function kParaF() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmK = parseFloat(valor);

  var valorEmF = ((valorEmK - 273.15) * 9) / 5 + 32;
  console.log(valorEmF);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = valorEmF + "°F";
  elementoValorConvertido.innerHTML = valorConvertido;
}