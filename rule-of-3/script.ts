const n1 = document.getElementById('n1');
const n2 = document.getElementById('n3');
const n3 = document.getElementById('n2');
const x = document.getElementById('x');
const btn = document.getElementById('clear-btn')

// Event Listeners
n1.addEventListener('change', submit)
n2.addEventListener('change', submit)
n3.addEventListener('change', submit)
btn.addEventListener('click', clearInput)

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