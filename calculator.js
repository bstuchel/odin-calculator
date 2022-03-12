function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function addButtonEventListeners() {
    let numbers = document.getElementsByClassName('number');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("mouseenter", (e) => e.currentTarget.classList.add("active"));
        numbers[i].addEventListener("mouseleave", (e) => e.currentTarget.classList.remove("active"));
        numbers[i].addEventListener("click", clickNumber);
    }

    let operators = document.getElementsByClassName('operator');
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("mouseenter", (e) => e.currentTarget.classList.add("active"));
        operators[i].addEventListener("mouseleave", (e) => e.currentTarget.classList.remove("active"));
        operators[i].addEventListener("click", clickOperator);
    }

    let clearBtn = document.getElementById('clear');
    clearBtn.addEventListener("mouseenter", (e) => e.currentTarget.classList.add("active"));
    clearBtn.addEventListener("mouseleave", (e) => e.currentTarget.classList.remove("active"));
    clearBtn.addEventListener("click", clear);
}

function clear() {
    displayValue = '0';
    num1 = 0;
    op = null;
    display.innerHTML = displayValue;
}

function clickNumber() {
    if (this.innerHTML === '.') {
        if (!displayValue.includes('.')) {
            displayValue += '.';
        }
    } else {
        if (displayValue === '0') {
            displayValue = this.innerHTML;
        } else {
            displayValue = displayValue + this.innerHTML;
        }
    }
    display.innerHTML = displayValue;
}

function clickOperator() {
    switch (this.innerHTML) {
        case '÷':
            num1 = parseFloat(displayValue);
            op = divide;
            displayValue = '0';
            break;
        case '×':
            num1 = parseFloat(displayValue);
            op = multiply;
            displayValue = '0';
            break;
        case '+':
            num1 = parseFloat(displayValue);
            op = add;
            displayValue = '0';
            break;
        case '-':
            num1 = parseFloat(displayValue);
            op = subtract;
            displayValue = '0';
            break;
        case '=':
            num1 = operate(op, num1, parseFloat(displayValue));
            display.innerHTML = num1;
            displayValue = display.innerHTML;
    }
}

let display = document.getElementById('display');
let displayValue = display.innerHTML;
let num1 = 0;
let op = null;
addButtonEventListeners();