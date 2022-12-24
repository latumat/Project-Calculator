var stored = document.querySelectorAll('.num');
var operands = document.querySelectorAll('.opp');
var screen = document.querySelector('.top');
var clearButton = document.querySelector('.ac');
var lastNum = '';
var nextNum = '';
var position = 1;
var op = '';
var eqStatus = false;

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operation, a, b) {
    return operation(a, b);
};

function storedNumber() {
    stored.forEach((s) => {
        s.addEventListener('click', () => {
            if (position === 1) {
                lastNum = lastNum + s.textContent;
            } else {
                nextNum = nextNum + s.textContent;
            }
            screen.innerHTML = lastNum + op + nextNum;
            console.log(lastNum)
        });
    });
};

function operandClick() {
    operands.forEach((operand) => {
        operand.addEventListener('click', () => {
            if (operand.textContent === '=') {
                eqStatus = true;
                result()
            } else {
                position = 2
                op = operand.textContent;
                screen.innerHTML = lastNum + op + nextNum;
                console.log(op);
            }
        });
    })
}

function result() {
    var func = ''
    if (op === '÷') {
        func = divide;
    } else if (op === 'x') {
        func = multiply;
    } else if (op === '-') {
        func = substract;
    } else {
        func = add;
    };
    lastNum = Math.round(operate(func, parseFloat(lastNum), parseFloat(nextNum))*1000000000) / 1000000000;
    nextNum = ''
    screen.innerHTML = lastNum;
    eqStatus = false;
}

function clear() {
    clearButton.addEventListener('click', () => {
        lastNum = ''
        nextNum = ''
        op = ''
        position = 1
        screen.innerHTML = ''
    })

}
function calculator() {
    storedNumber()
    operandClick()
    clear()
}

calculator()