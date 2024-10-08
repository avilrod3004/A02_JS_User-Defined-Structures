function validarContenidoMatriz(matriz){
    let matrizValida = true;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (!Number.isInteger(Number(matriz[i][j]))) {
                matrizValida = false;
            }
        }
    }

    return matrizValida;
}

function aplanarMatriz(matriz) {
    const arrayAplanado = [];
    let suma = 0;

    if (validarContenidoMatriz(matriz)) {
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                arrayAplanado.push(matriz[i][j]);
                suma += matriz[i][j];
            }
        }
    } else {
        console.log("ERROR - El contendio de la matriz no es válido. Los elementos deben ser números enteros.")
        return suma;
    }

    return suma / arrayAplanado.length;
}

const arrayBidimensional = [[1, "a", 3, 4], [4, 5, 6, 7, 8]];
console.log(`El promedio de los elementos de la matriz es: ${aplanarMatriz(arrayBidimensional)}`);