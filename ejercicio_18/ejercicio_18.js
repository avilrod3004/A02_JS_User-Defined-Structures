function validarPrecioBase(precioBase) {
    return Number(precioBase) > 0;
}

function validarDescuentos(descuentos) {
    return descuentos.every(descuento => descuento <= 100 && descuento >= 0);
}

function calcularPrecioFinal(precioBase, descuentos) {
    if (validarPrecioBase(precioBase) && validarDescuentos(descuentos)) {
        let precioFinal = Number(precioBase);
        descuentos.forEach((descuento) => {
            precioFinal -= (Number(precioFinal) * (descuento / 100));
        })

        return precioFinal;
    } else if (!validarDescuentos(descuentos)) {
        console.log("ERROR - El formato de los descuentos no es válido.")
    }
}

function mostrarPrecioFinal(precioBase, descuentos) {
    const precioFinal = calcularPrecioFinal(precioBase, descuentos);

    if (precioFinal !== undefined) {
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal}`);
    } else {
        console.log("ERROR - Ha habido un fallo :(")
    }
}

mostrarPrecioFinal(100, [10, 20]);