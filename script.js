let result = document.getElementById("result");

function calculate(value) {
  result.value += value;
}

function getResult() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = "";
}
