function calcularSumaPrecios(arrayObjetos) {
    const sumaPrecios = arrayObjetos.reduce(
        (total, producto) => total + producto.precio, 0
    );

    if (isNaN(sumaPrecios) || sumaPrecios === 0) {
        console.log("ERROR - Hubo un problema al calcular la suma. Revisa el contenido del array.")
    } else {
        return sumaPrecios;
    }
}

const arrayObjetos = [{nombre: "Macarrones", precio: 12.45}, {nombre: "Queso", precio: 2}];
let sumaPrecios = calcularSumaPrecios(arrayObjetos);

if (sumaPrecios !== undefined) {
    console.log(sumaPrecios);
}