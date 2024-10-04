function sumar(numero1, numero2) {

    if (!Number.isInteger(numero1) || (!Number.isInteger(numero2))) {
        numero1 = Number.parseInt(numero1);
        numero2 = Number.parseInt(numero2);
    }

    return numero1 + numero2;
}

const numero1 = (Math.random() * 10).toFixed();
const numero2 = (Math.random() * 10).toFixed();

const resultado = sumar(numero1, numero2);

console.log(resultado);