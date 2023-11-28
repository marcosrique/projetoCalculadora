let display = document.getElementById('display');
let history = document.getElementById('history');
let memory = 0;

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
    updateHistory(result);
  } catch (error) {
    display.value = 'Error';
  }
}

function storeInMemory() {
  memory += parseFloat(display.value);
  clearDisplay();
}

function recallMemory() {
  display.value += memory;
}

function clearMemory() {
  memory = 0;
}

function updateHistory(result) {
  history.innerHTML += `${display.value} = ${result}<br>`;
}