
/**
 * Comprueba si la entrada es un número entero
 * @param numero Entrada
 * @return Boolean true si es un número entero / false si no es un número entero
 * */
function validarEntradaEnteros(numero) {
    return Number.isInteger(Number(numero));
}

function numeroValido(numero) {
    return Number(numero) >= 1 && Number(numero) <= 100;
}


/**
 * Recibe dos números entre 1 y 100 y calcula todos los números pares de ese rango
 * @param numero1 Número de inicio del rango
 * @param numero2 Número de fin del rango
 * @return number[] Números pares del rango
 * */
function findPairs(numero1, numero2) {
    const rango = [];

    // Comprueba que las entradas sean números enteros
    if (validarEntradaEnteros(numero1) && validarEntradaEnteros(numero2)) {
        // Comprueba que el primer número sea menor que el segundo
        if (Number(numero1) < Number(numero2)) {
            // Compreuba que esten entre los números 1 a 100
            if (numeroValido(numero1) && numeroValido(numero2)) {
                // Itera sobre el rango de números y añade al array los que sean pares
                for (let i = Number(numero1) + 1; i < Number(numero2); i++) {
                    if (i % 2 === 0) {
                        rango.push(i);
                    }
                }
            } else {
                alert("ERROR - Los números no están dentro del rango válido. (1 - 100)")
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
    // Entrada de datos
    const numero1 = prompt("Número de inicio del rango: ");
    const numero2 = prompt("Número que termina el rango: ")

    // Genera el array de los números pares comprendidos en el rango
    rango = findPairs(numero1, numero2);
} while (rango.length <= 0)

// Salida
alert(rango);