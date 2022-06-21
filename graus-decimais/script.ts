const fielddegreesX = document.getElementById('degreesX');
const fielddegreesY = document.getElementById('degreesY');
const fieldminutesX = document.getElementById('minutesX');
const fieldminutesY = document.getElementById('minutesY');
const fieldsecondsX = document.getElementById('secondsX');
const fieldsecondsY = document.getElementById('secondsY');
const res = document.getElementById('res');
const longitude = document.getElementsByName('longitude');
const latitude = document.getElementsByName('latitude');

document.getElementById('botao').addEventListener('click', converter);

function valor(field) {
    return Number(field instanceof HTMLInputElement ? field.value : '');
}
function validate(field) {
    if (valor(field) >= 0) return true;
    else return false;
}
function converter() {
    res.innerHTML = '';
    if (longitude[0] instanceof HTMLInputElement ? longitude[0].checked : '') {
        var sinalY = '+';
    } else {
        var sinalY = '-';
    }
    if (latitude[0] instanceof HTMLInputElement ? latitude[0].checked : '') {
        var sinalX = '+';
    } else {
        var sinalX = '-';
    }
    if (
        validate(fielddegreesX) &&
        validate(fielddegreesY) &&
        validate(fieldminutesX) &&
        validate(fieldminutesY) &&
        validate(fieldsecondsX) &&
        validate(fieldsecondsY)
    ) {
        const degreesY = valor(fielddegreesY);
        const minutesY = valor(fieldminutesY);
        const secondsY = valor(fieldsecondsY);
        const degreesX = valor(fielddegreesX);
        const minutesX = valor(fieldminutesX);
        const secondsX = valor(fieldsecondsX);
        res.innerHTML = `y: ${
            sinalY + (degreesY + minutesY / 60 + secondsY / 3600).toPrecision(5)
        }<br>x: ${
            sinalX + (degreesX + minutesX / 60 + secondsX / 3600).toPrecision(5)
        }`;
    } else {
        alert('Valores inválidos! Tente novamente');
    }
}
