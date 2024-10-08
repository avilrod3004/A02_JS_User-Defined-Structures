class Producto{
    constructor(nombre, categoria, precio, cantidadStock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidadStock = cantidadStock;
    }

    actualizarStock(cantidad) {
        if (Number.isInteger(cantidad)) {
            cantidad < 0 ? this.cantidadStock -= cantidad : this.cantidadStock += cantidad;

            if (this.cantidadStock < 0) {
                this.cantidadStock = 0;
            }
        } else {
            console.log("ERROR - El valor introducido no es válido. Debe ser un número entero.")
        }
    }
}

class Inventario{
    #listaProductos = [];

    agregar(producto){
        this.#listaProductos.push(producto);
    }

    eliminar(nombre){
        this.#listaProductos = this.#listaProductos.filter(producto => producto.nombre !== nombre);
    }

    buscarPorNombre(nombre){
        const producto = this.#listaProductos.find(producto => producto.nombre === nombre);

        if (producto !== undefined){
            console.log("\n-------------------------------------");
            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Categoria: ${producto.categoria}`);
            console.log(`Precio: ${producto.precio}`);
            console.log(`Cantidad en stock: ${producto.cantidadStock}`);
            console.log("-------------------------------------\n");

            return producto;
        } else {
            console.log(`ERROR - El producto ${nombre} no está en el inventario.`);
        }
    }
}

const pocion = new Producto("Superpoción", "Pocion", 14.50, 5);
const libro = new Producto("Dragones", "Libro", 100, 1);
const caja = new Producto("Caja de pandora", "Caja", 2);

const inventario = new Inventario();

console.log("Agregar una pocion, un libro y una caja al inventario")
inventario.agregar(pocion);
inventario.agregar(libro);
inventario.agregar(caja);

console.log("Ver informacion de la pocion")
const producto = inventario.buscarPorNombre("Superpoción");
console.log("Agregar stock a las pociones");
producto.actualizarStock(4);
inventario.buscarPorNombre("Superpoción");

console.log("Eliminar libro del inventario");
inventario.eliminar("Dragones");
console.log("Buscarlo en el inventario para saber si sea borrado correctamente");
inventario.buscarPorNombre("Dragones");



