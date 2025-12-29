'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function () {
    const a = parseInt(num1.value);
    const b = parseInt(num2.value);
    let output;

    if (operation.value === 'add') {
        output = a + b;
    } else if (operation.value === 'sub') {
        output = a - b;
    } else if (operation.value === 'multi') {
        output = a * b;
    } else if (operation.value === 'div') {
        if (b === 0) {
            result.innerText = 'Division by zero is not allowed';
            return;
        }
        output = a / b;
    }

    result.innerText = 'Result: ' + output;
});
