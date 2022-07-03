// Variables
const buttons = document.querySelectorAll('[type="button"]');
const del = document.querySelector('[delete]');
const numbers = document.querySelectorAll('[number]');
const operations = document.querySelectorAll('[operation]');
const equals = document.querySelector('[equal]');
const ac = document.querySelector('[allClear]');
const previousEle = document.querySelector('[previous-operand]');
const currentEle = document.querySelector('[current-operand]');

// Event Listeners
del.addEventListener('click', delNum);
equals.addEventListener('click', result);
ac.addEventListener('click', clearNum);
numbers[0].addEventListener('click', () => {
    addNum('1');
});
numbers[1].addEventListener('click', () => {
    addNum('2');
});
numbers[2].addEventListener('click', () => {
    addNum('3');
});
numbers[3].addEventListener('click', () => {
    addNum('4');
});
numbers[4].addEventListener('click', () => {
    addNum('5');
});
numbers[5].addEventListener('click', () => {
    addNum('6');
});
numbers[6].addEventListener('click', () => {
    addNum('7');
});
numbers[7].addEventListener('click', () => {
    addNum('8');
});
numbers[8].addEventListener('click', () => {
    addNum('9');
});
numbers[9].addEventListener('click', () => {
    addNum('.');
});
numbers[10].addEventListener('click', () => {
    addNum('0');
});
operations[0].addEventListener('click', () => {
    operation('÷');
});
operations[1].addEventListener('click', () => {
    operation('*');
});
operations[2].addEventListener('click', () => {
    operation('+');
});
operations[3].addEventListener('click', () => {
    operation('-');
});

// Functions

function addNum(num) {
    currentEle instanceof HTMLElement ? (currentEle.innerText += num) : '';
}

function delNum() {}

function clearNum() {
    previousEle instanceof HTMLElement ? (previousEle.innerText = ' ') : '';
    currentEle instanceof HTMLElement ? (currentEle.innerText = ' ') : '';
}

function result() {}

function operation(sign) {
    let currentTxt =
        currentEle instanceof HTMLElement ? currentEle.innerText : '';
    previousEle instanceof HTMLElement
        ? (previousEle.innerText = currentTxt + sign)
        : '';
    currentEle instanceof HTMLElement ? (currentEle.innerText = '') : '';
}
