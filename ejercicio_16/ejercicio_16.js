class Personaje {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
        this.nivel = 1;
        this.puntoVida = 100;
    }

    atacar(enemigo) {
        if (enemigo.puntoVida > 10) {
            enemigo.puntoVida -= 10;
        } else {
            enemigo.puntoVida = 0;
            this.subirNivel();
        }
    }

    recuperarVida() {
        this.puntoVida += 20;
        if (this.puntoVida > 100) {
            this.puntoVida = 100;
        }
    }

    subirNivel() {
        alert(`${this.nombre} ha sido derrotado`);
        this.nivel = 1;
        this.puntoVida = 100;
    }
}

const rodolfo = new Personaje("Rodolfo", "Enano");
const ricardo = new Personaje("Ricardo", "Elfo")
const personajes = [rodolfo, ricardo];

console.log(" --- PRUEBA --- ");
console.table(rodolfo);
console.table(ricardo);

console.log(" --- Rodolfo ataca a Ricardo ---")
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
console.table(ricardo);

console.log(" --- Ricardo recupera vida ---")
ricardo.recuperarVida();
console.table(ricardo);

console.log(" --- Rodolfo debilita a Ricardo ---");
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);
rodolfo.atacar(ricardo);

console.log(" --- Estado del final de la pruba ---")
console.table(rodolfo);
console.table(ricardo);