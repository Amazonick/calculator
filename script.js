const header = document.querySelector('.header');
const mainContainer = document.querySelector('.container');
const calculatorDisplay = document.querySelector('.display');
const calculatorControls = document.querySelector('.controls');
const operatonContainer = document.querySelector('.operators');
const numbersContainer = document.querySelector('.numbers-container');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const equalsBtn = document.getElementById('equals');
const numbersBtns = document.querySelectorAll('.number-btn');
const clearBtn = document.getElementById('clear-btn');
let numberBtnsValue;
let firstNumber;
let secondNumber;

// DISPLAY NUMBERS
function displayInput() {
    numbersBtns.forEach((button) =>
        button.addEventListener('click', (e) => {
            numberBtnsValue = e.target.value;
            calculatorDisplay.textContent += numberBtnsValue;
        })
    );
}
displayInput();

// CLEAR DISPLAY
function clearDisplay() {
    clearBtn.addEventListener('click', () => {
        calculatorDisplay.textContent = '';
    });
}
clearDisplay();















// OPERATIONS FUNCTIONS
function addition(a, b) {
    return a + b;
}
function substraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return addition(num1, num2);
    } else if (operator === '-') {
        return substraction(num1, num2);
    } else if (operator === '*') {
        return multiplication(num1, num2);
    } else if (operator === '/') {
        return division(num1, num2);
    }
}
