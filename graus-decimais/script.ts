const fieldGrausX = document.getElementById('grausX');
const fieldGrausY = document.getElementById('grausY');
const fieldMinutosX = document.getElementById('minutosX');
const fieldMinutosY = document.getElementById('minutosY');
const fieldSegundosX = document.getElementById('segundosX');
const fieldSegundosY = document.getElementById('segundosY');
const res = document.getElementById('res');
const longitude = document.getElementsByName('longitude');
const latitude = document.getElementsByName('latitude');

function valor(field) {
    return Number(field instanceof HTMLInputElement ? field.value : '');
}

function validar(field) {
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
        validar(fieldGrausX) &&
        validar(fieldGrausY) &&
        validar(fieldMinutosX) &&
        validar(fieldMinutosY) &&
        validar(fieldSegundosX) &&
        validar(fieldSegundosY)
    ) {
        const grausY = valor(fieldGrausY);
        const minutosY = valor(fieldMinutosY);
        const segundosY = valor(fieldSegundosY);
        const grausX = valor(fieldGrausX);
        const minutosX = valor(fieldMinutosX);
        const segundosX = valor(fieldSegundosX);

        res.innerHTML = `y: ${
            sinalY + (grausY + minutosY / 60 + segundosY / 3600).toPrecision(5)
        }<br>x: ${
            sinalX + (grausX + minutosX / 60 + segundosX / 3600).toPrecision(5)
        }`;
    } else {
        alert('Valores inválidos! Tente novamente');
    }
}
