const campoGrausX = document.getElementById('grausX');
const campoGrausY = document.getElementById('grausY');
const campoMinutosX = document.getElementById('minutosX');
const campoMinutosY = document.getElementById('minutosY');
const campoSegundosX = document.getElementById('segundosX');
const campoSegundosY = document.getElementById('segundosY');
const res = document.getElementById('res');
const longitude = document.getElementsByName('longitude');
const latitude = document.getElementsByName('latitude');

function valor(campo) {
    return Number(campo instanceof HTMLInputElement ? campo.value : '');
}

function validar(campo) {
    if (valor(campo) >= 0) return true;
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
        validar(campoGrausX) &&
        validar(campoGrausY) &&
        validar(campoMinutosX) &&
        validar(campoMinutosY) &&
        validar(campoSegundosX) &&
        validar(campoSegundosY)
    ) {
        const grausY = valor(campoGrausY);
        const minutosY = valor(campoMinutosY);
        const segundosY = valor(campoSegundosY);
        const grausX = valor(campoGrausX);
        const minutosX = valor(campoMinutosX);
        const segundosX = valor(campoSegundosX);

        res.innerHTML = `y:${sinalY + (
            grausY +
            minutosY / 60 +
            segundosY / 3600
        ).toPrecision(5)}<br>x:${sinalX + (
            grausX +
            minutosX / 60 +
            segundosX / 3600
        ).toPrecision(5)}`;
    } else {
        alert('Valores inválidos! Tente novamente');
    }
}
