const cadenaCodificada = prompt("Introduce la cadena codificada en ROT13: ");

const caracteresAlfabeticos = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function descifrar(cadenaCodificada, caracteresAlfabeticos) {
    const arrayCodificado = [...cadenaCodificada];
    let descifrado = "";
    let caracterDescrifrado;

    arrayCodificado.forEach((caracter) => {
        if (caracteresAlfabeticos.includes(caracter)) {
            const posicionLetra = caracteresAlfabeticos.findIndex(letra => letra === caracter);
            let nuevaPosicion;
            if (posicionLetra < 13) {
                const descontar = 13 - posicionLetra;
                nuevaPosicion = 27 - descontar;
            } else {
                nuevaPosicion = posicionLetra - 13;
            }

            caracterDescrifrado = caracteresAlfabeticos[nuevaPosicion];
        } else {
            caracterDescrifrado = caracter;
        }

        descifrado += caracterDescrifrado;
    })

    return descifrado;
}

console.log(descifrar(cadenaCodificada.toLowerCase(), caracteresAlfabeticos));