function validarArray(array) {
    return array.every(numero => Number.isInteger(Number(numero)));
}

function filtrarYTransformar(arrayNumeros) {
    let resultado = [];

    if (validarArray(arrayNumeros)) {
        const arrayImpares = arrayNumeros.filter(numero => numero % 2 !== 0);
        resultado = arrayImpares.map(numero => numero * 2);
    } else {
        console.log("ERROR - El contenido del array no es el esperado.");
    }

    return resultado;
}

const resultado = filtrarYTransformar([1,2,3,4,5,6,7]);
if (resultado.length > 0) {
    console.log(resultado);
}
