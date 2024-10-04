const arrayNumero = [1, 2, 3, 4, 5];

// Filtrado
const filtrado = arrayNumero.filter(numero => numero % 2 === 0);
console.log(`Números pares: ${filtrado}`);

// Reducción
const reduccion = arrayNumero.reduce((acumulador, numero) => {
    if (numero % 2 === 0) {
        acumulador.pares.push(numero);
    } else {
        acumulador.impares.push(numero);
    }

    return acumulador;
}, {pares: [], impares: []})
console.log(reduccion);

// Recolección
const recoleccion = arrayNumero.map(numero => numero * 2);
console.log(recoleccion);