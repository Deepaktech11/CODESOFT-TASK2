// added some whitespace and comments for readability
let display = document.getElementById('display');

// clear the display
function clearDisplay() {
    display.value = '';
}

// append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// perform calculation
function calculate() {
    try {
        // using eval() is not recommended, but it's a simple way to evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'
    }
}