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
    display.innerHTML = '0';
}

function clickNumber() {
    if (!op && displayValue == '0') {
        clear();
    }
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
    if (displayValue.length > 7) {
        display.innerHTML = displayValue.substring(0,7);
    } else {
        display.innerHTML = displayValue;
    }
}

function clickOperator() {
    if (op) {
        num1 = operate(op, num1, parseFloat(displayValue));
        console.log(num1);
        displayValue = String(num1);
        console.log(displayValue);
        if (displayValue.length > 7) {
            display.innerHTML = displayValue.substring(0,7);
        } else {
            display.innerHTML = displayValue;
        }
        displayValue = '0';
    } else if (displayValue != '0') {
        num1 = parseFloat(displayValue);
        displayValue = '0';
    }
    switch (this.innerHTML) {
        case '÷':
            op = divide;
            break;
        case '×':
            op = multiply;
            break;
        case '+':
            op = add;
            break;
        case '-':
            op = subtract;
            break;
        case '=':
            op = null;
            break;
    }
}

let display = document.getElementById('display');
let displayValue = display.innerHTML;
let num1 = 0;
let op = null;
addButtonEventListeners();