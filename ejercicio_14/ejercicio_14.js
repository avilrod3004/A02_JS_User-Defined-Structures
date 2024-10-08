function validarFecha(fecha) {
    return fecha <= 2500 && fecha >= 2001;
}

function esBisiesto(fecha) {
    return (fecha % 4 === 0) || (fecha % 100 === 0 && fecha % 400 === 0);
}

function isLeapYear(fecha1, fecha2) {
    const bisiestos = [];

    if (validarFecha(fecha1) && validarFecha(fecha2)) {
        for (let i = fecha1; i < fecha2; i += 1) {
            if (esBisiesto(i)) {
                bisiestos.push(i);
            }
        }
    } else {
        console.log("ERROR - El rango de años debe estar entre 2001 y 2500.")
    }

    return bisiestos;
}

const bisiestos = isLeapYear("a", 2050);

if (bisiestos.length > 0) {
    console.log("Años bisiestos en el rango:", bisiestos);
} else {
    console.log("No hay años bisiestos en el rango especificado.");
}