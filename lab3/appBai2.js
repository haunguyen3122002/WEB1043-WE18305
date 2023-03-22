let result = document.getElementById('result');

function getElementById(value) {
  result.value += value;
}

function getElementById() {
  result.value = '';
}

function getElementById() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}