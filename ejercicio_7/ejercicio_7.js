class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        return "Hola!";
    }
}

class Perro extends Animal {
    hablar() {
        return "Guau guau";
    }
}

class Gato extends Animal {
    hablar() {
        return "Miau miau";
    }
}

const perro = new Perro("Firulais", 5);
console.log(perro.hablar());

const gato = new Gato("Misifu", 3);
console.log(gato.hablar());