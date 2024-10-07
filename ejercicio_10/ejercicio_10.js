function validarEntrada(entrada) {
    if (Number.isInteger(Number(entrada))) {
        return Number(entrada) >= 1 && Number(entrada) <= 12;
    } else {
        return false;
    }
}

function numeroDias(mes) {
    if (mes == 2) {
        return 28;
    } else if (mes == (4 || 6 || 9 || 11)) {
        return 30;
    } else {
        return 31;
    }
}

let entrada = prompt("Introduce un número entre el 1 y el 12: ");

if (validarEntrada(entrada)) {
    alert(`El mes tiene ${numeroDias(entrada)}`)
} else {
    alert("ERROR - El valor introducido no es válido.")
}

