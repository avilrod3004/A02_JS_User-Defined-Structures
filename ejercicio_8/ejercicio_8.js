class Estudiante {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    agregarNota(nota) {
        const notaNumerica = Number(nota);

        if (!Number.isNaN(notaNumerica)) {
            this.notas.push(Number(nota))
        }
    }

    calcularPromedio() {
        const numeroNotas = this.notas.length;
        let sumaNotas = 0;
        this.notas.forEach(nota => {sumaNotas += nota;});

        return sumaNotas / numeroNotas;
    }

    determinarAprobado() {
        const promedio = this.calcularPromedio();
        console.log(promedio)

        return promedio >= 5;
    }
}

const estudiante = new Estudiante("John Doe", 14, []);

estudiante.agregarNota('a');
estudiante.agregarNota(10);
estudiante.agregarNota(5);
estudiante.agregarNota(6);
estudiante.agregarNota(4);

console.log(estudiante.notas)

console.log(estudiante.determinarAprobado() ? "Ha aprobado :)" : "Ha suspendido :(");