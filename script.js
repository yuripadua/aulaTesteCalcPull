let result = document.getElementById("result");

function getResult() {
  result.value = eval(result.value);
}

function calculate(value) {
  result.value += value;
}



function clearResult() {
  result.value = "";
}
