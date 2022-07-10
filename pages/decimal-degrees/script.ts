// Selectors
const degY = document.querySelector('[degY]');
const minY = document.querySelector('[minY]');
const secY = document.querySelector('[secY]');
const degX = document.querySelector('[degX]');
const minX = document.querySelector('[minX]');
const secX = document.querySelector('[secX]');
const confirmBtn = document.querySelector('[confirm-btn]');
const clearBtn = document.querySelector('[clear-btn]');
const resultY = document.querySelector('[resultY]');
const resultX = document.querySelector('[resultX]');
const northRadio = document.querySelector('[n]')
const southRadio = document.querySelector('[s]')
const eastRadio = document.querySelector('[e]')
const westRadio = document.querySelector('[w]')

// Global Variables
let signY = '+'
let signX = '+'

// Event Listeners
clearBtn.addEventListener('click', clear);
degY.addEventListener('input', convert);
minY.addEventListener('input', convert);
secY.addEventListener('input', convert);
degX.addEventListener('input', convert);
minX.addEventListener('input', convert);
secX.addEventListener('input', convert);
northRadio.addEventListener('click', convert)
southRadio.addEventListener('click', convert)
eastRadio.addEventListener('click', convert)
westRadio.addEventListener('click', convert)

// Functions
function convert() {
    console.clear();
    console.log('Converted');
    checkSign()
    const degYVal = degY instanceof HTMLInputElement ? degY.value : '';
    const minYVal = minY instanceof HTMLInputElement ? minY.value : '';
    const secYVal = secY instanceof HTMLInputElement ? secY.value : '';
    const degXVal = degX instanceof HTMLInputElement ? degX.value : '';
    const minXVal = minX instanceof HTMLInputElement ? minX.value : '';
    const secXVal = secX instanceof HTMLInputElement ? secX.value : '';

    const decimalY =
        Number(degYVal) + Number(minYVal) / 60 + Number(secYVal) / 3600;
    const decimalX =
        Number(degXVal) + Number(minXVal) / 60 + Number(secXVal) / 3600;

    console.log(`DecimalY = ${decimalY}`);
    console.log(`DecimalX = ${decimalX}`);

    resultY instanceof HTMLElement
        ? (resultY.innerText = `y: ${signY}${decimalY}`)
        : '';
    resultX instanceof HTMLElement
        ? (resultX.innerText = `x: ${signX}${decimalX}`)
        : '';
}

function clear() {
    resultY instanceof HTMLElement ? (resultY.innerText = 'y:') : '';
    resultX instanceof HTMLElement ? (resultX.innerText = 'x:') : '';
    console.log('Cleared');
    degY instanceof HTMLInputElement ? (degY.value = '') : '';
    minY instanceof HTMLInputElement ? (minY.value = '') : '';
    secY instanceof HTMLInputElement ? (secY.value = '') : '';
    degX instanceof HTMLInputElement ? (degX.value = '') : '';
    minX instanceof HTMLInputElement ? (minX.value = '') : '';
    secX instanceof HTMLInputElement ? (secX.value = '') : '';
}

function checkSign() {
    if (northRadio instanceof HTMLInputElement ? !northRadio.checked : '') {
        signY = '-'
    }
    else {
        signY = '+'
    }
    if (eastRadio instanceof HTMLInputElement ? !eastRadio.checked : '') {
        signX = '-'
    }
    else {
        signX = '+'
    }
}
