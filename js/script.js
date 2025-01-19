let currentNumber = '';
let previousNumber = '';
let operation = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculate();
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function calculate() {
    if (previousNumber === '' || currentNumber === '') return;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    let result;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = '';
    previousNumber = '';
    updateDisplay();
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = `${previousNumber} ${operation} ${currentNumber}`.trim();
}
