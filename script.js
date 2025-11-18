const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function addDenomination(amount) {
    if (display.value === '' || display.value.endsWith('+') || display.value.endsWith('-') || display.value.endsWith('*') || display.value.endsWith('/')) {
        display.value += amount;
    } else {
        display.value += '+' + amount;
    }
}