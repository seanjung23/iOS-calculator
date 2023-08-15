const screen = document.querySelector(".screen");

const operations = ["C", "←", "÷", "×", "-", "+", "="];

let runningTotal = 0;
let currentNumber = "";
let operator = null;

const buttonClick = (value) => {
  if (value === operations[0]) {
    runningTotal = 0;
    currentNumber = "";
    operator = null;
    screen.innerText = 0;
  } else if (value === operations[1]) {
    if (currentNumber.length === 1) {
      currentNumber = "";
      screen.innerText = 0;

      return;
    }

    currentNumber = currentNumber.slice(0, -1);
    screen.innerText = currentNumber;
  } else if (value === operations[6]) {
    calculate(value);

    screen.innerText = runningTotal;
  } else if (operations.includes(value)) {
    if (currentNumber.length === 0) {
      currentNumber = "0";
    }
    if (operator) {
      calculate(value);

      return;
    }

    operator = value;
    runningTotal = parseInt(currentNumber);
    currentNumber = "";
    screen.innerText = 0;
  } else {
    currentNumber += value;
    screen.innerText = currentNumber;
  }
};

const calculate = (value) => {
  if (operator === operations[2]) {
    runningTotal /= parseInt(currentNumber);
  } else if (operator === operations[3]) {
    runningTotal *= parseInt(currentNumber);
  } else if (operator === operations[4]) {
    runningTotal -= parseInt(currentNumber);
  } else if (operator === operations[5]) {
    runningTotal += parseInt(currentNumber);
  }

  operator = value;
  currentNumber = "";
  screen.innerText = 0;
};

const init = () => {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
};

init();
