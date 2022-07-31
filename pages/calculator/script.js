const buttons = document.querySelectorAll('[type="button"]');
const del = document.querySelector('[delete]');
const numbers = document.querySelectorAll('[number]');
const operations = document.querySelectorAll('[operation]');
const equals = document.querySelector('[equal]');
const ac = document.querySelector('[allClear]');
const previousEle = document.querySelector('[previous-operand]');
const currentEle = document.querySelector('[current-operand]');
let sign = '';
del.addEventListener('click', () => {
    delNum();
    removeFocus();
});
ac.addEventListener('click', () => {
    allClear();
    removeFocus();
});
numbers[0].addEventListener('click', () => {
    addNum('1');
    removeFocus();
});
numbers[1].addEventListener('click', () => {
    addNum('2');
    removeFocus();
});
numbers[2].addEventListener('click', () => {
    addNum('3');
    removeFocus();
});
numbers[3].addEventListener('click', () => {
    addNum('4');
    removeFocus();
});
numbers[4].addEventListener('click', () => {
    addNum('5');
    removeFocus();
});
numbers[5].addEventListener('click', () => {
    addNum('6');
    removeFocus();
});
numbers[6].addEventListener('click', () => {
    addNum('7');
    removeFocus();
});
numbers[7].addEventListener('click', () => {
    addNum('8');
    removeFocus();
});
numbers[8].addEventListener('click', () => {
    addNum('9');
    removeFocus();
});
numbers[9].addEventListener('click', () => {
    addNum('.');
    removeFocus();
});
numbers[10].addEventListener('click', () => {
    addNum('0');
    removeFocus();
});
operations[0].addEventListener('click', () => {
    result();
    operation('/');
    removeFocus();
});
operations[1].addEventListener('click', () => {
    result();
    operation('*');
    removeFocus();
});
operations[2].addEventListener('click', () => {
    result();
    operation('+');
    removeFocus();
});
operations[3].addEventListener('click', () => {
    result();
    operation('-');
    removeFocus();
});
del.addEventListener('click', () => {
    delNum();
    removeFocus();
});
equals.addEventListener('click', () => {
    result();
    removeFocus();
});
document.addEventListener('keydown', (event) => {
    const name = event.key;
    console.log('Key pressed:', name);
    switch (name) {
        case '1':
            numbers[0] instanceof HTMLElement ? numbers[0].click() : '';
            break;
        case '2':
            numbers[1] instanceof HTMLElement ? numbers[1].click() : '';
            break;
        case '3':
            numbers[2] instanceof HTMLElement ? numbers[2].click() : '';
            break;
        case '4':
            numbers[3] instanceof HTMLElement ? numbers[3].click() : '';
            break;
        case '5':
            numbers[4] instanceof HTMLElement ? numbers[4].click() : '';
            break;
        case '6':
            numbers[5] instanceof HTMLElement ? numbers[5].click() : '';
            break;
        case '7':
            numbers[6] instanceof HTMLElement ? numbers[6].click() : '';
            break;
        case '8':
            numbers[7] instanceof HTMLElement ? numbers[7].click() : '';
            break;
        case '9':
            numbers[8] instanceof HTMLElement ? numbers[8].click() : '';
            break;
        case '.':
            numbers[9] instanceof HTMLElement ? numbers[9].click() : '';
            break;
        case '0':
            numbers[10] instanceof HTMLElement ? numbers[10].click() : '';
            break;
        case '/':
            operations[0] instanceof HTMLElement ? operations[0].click() : '';
            break;
        case '*':
            operations[1] instanceof HTMLElement ? operations[1].click() : '';
            break;
        case '+':
            operations[2] instanceof HTMLElement ? operations[2].click() : '';
            break;
        case '-':
            operations[3] instanceof HTMLElement ? operations[3].click() : '';
            break;
        case 'Backspace':
            del instanceof HTMLElement ? del.click() : '';
            break;
        case 'Enter':
            equals instanceof HTMLElement ? equals.click() : '';
            break;
    }
});
function removeFocus() {
    document.activeElement instanceof HTMLElement
        ? document.activeElement.blur()
        : '';
}
function addNum(num) {
    console.log(`Number ${num} added`);
    currentEle instanceof HTMLElement ? (currentEle.innerText += num) : '';
}
function delNum() {
    console.log('Number deleted');
    currentEle instanceof HTMLElement
        ? (currentEle.innerText = currentEle.innerText.slice(0, -1))
        : '';
}
function allClear() {
    console.log('All clear');
    previousEle instanceof HTMLElement ? (previousEle.innerText = '') : '';
    currentEle instanceof HTMLElement ? (currentEle.innerText = '') : '';
}
function result() {
    let previousTxt = previousEle instanceof HTMLElement ? previousEle.innerText : '';
    let currentTxt = currentEle instanceof HTMLElement ? currentEle.innerText : '';
    const calculation = `${Number(previousTxt.slice(0, -1))} ${sign} ${currentTxt}`;
    if (sign != '') {
        previousEle instanceof HTMLElement ? (previousEle.innerText = '') : '';
        currentEle instanceof HTMLElement
            ? (currentEle.innerText = eval(calculation))
            : '';
        console.log(calculation);
        sign = '';
    }
}
function operation(operation) {
    sign = operation;
    console.log(`The operation is ${sign}`);
    let currentTxt = currentEle instanceof HTMLElement ? currentEle.innerText : '';
    previousEle instanceof HTMLElement
        ? (previousEle.innerText = `${currentTxt} ${sign}`)
        : '';
    currentEle instanceof HTMLElement ? (currentEle.innerText = '') : '';
}
