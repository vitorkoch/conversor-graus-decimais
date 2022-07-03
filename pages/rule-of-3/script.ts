// Selectors
const n1 = document.querySelector('[n1]');
const n2 = document.querySelector('[n2]');
const n3 = document.querySelector('[n3]');
const x = document.querySelector('[x]');
const btn = document.querySelector('[clear-btn]')

// Event Listeners
n1.addEventListener('input', submit)
n2.addEventListener('input', submit)
n3.addEventListener('input', submit)
btn.addEventListener('click', clearInput)

// Functions
function value(n) {
    return n instanceof HTMLInputElement ? n.value : ''
}

function submit() {
    console.log('Confirm button clicked')
    const xValue = (Number(value(n2)) * Number(value(n3))) / Number(value(n1))
    x instanceof HTMLInputElement ? (x.value = String(xValue)) : ''
}
function clearInput() {
    console.log('Clear button clicked')
    n1 instanceof HTMLInputElement ? (n1.value = null) : ''
    n2 instanceof HTMLInputElement ? (n2.value = null) : ''
    n3 instanceof HTMLInputElement ? (n3.value = null) : ''
    x instanceof HTMLInputElement ? (x.value = null) : ''
}