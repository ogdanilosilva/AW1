let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Erro';
        updateDisplay();
    }
}

function toggleNegative() {
    if (displayValue[0] === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    updateDisplay();
}
