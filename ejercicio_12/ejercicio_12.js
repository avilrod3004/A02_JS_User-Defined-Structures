function validarEntradaEnteros(numero) {
    return Number.isInteger(Number(numero));
}

function findPairs(numero1, numero2) {
    const rango = [];

    if (validarEntradaEnteros(numero1) && validarEntradaEnteros(numero2)) {
        if (Number(numero1) < Number(numero2)) {
            for (let i = Number(numero1) + 1; i < Number(numero2); i++) {
                rango.push(i);
            }
        } else {
            alert("ERROR - El primer número debe ser menor que el segundo.");
        }
    } else {
        alert("ERROR - El valor de los números no es correcto.")
    }

    return rango;
}

let rango = [];

do {
    const numero1 = prompt("Número de inicio del rango: ");
    const numero2 = prompt("Número que termina el rango: ")

    rango = findPairs(numero1, numero2);
} while (rango.length <= 0)

alert(rango);