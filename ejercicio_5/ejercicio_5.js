const libro1 = {
    titulo: "El espía que surgió del frio",
    autor: "John Le Carré",
    paginas: 304,

    resumen: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor} y tiene ${this.paginas} páginas`
    }
}

const libro2 = {
    titulo: "20.000 leguas de viaje submarino",
    autor: "Julio Verne",
    paginas: 368,

    resumen: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor} y tiene ${this.paginas} páginas`
    }
}

const libro3 = {
    titulo: "El lobo de mar",
    autor: "Jack London",
    paginas: 376,

    resumen: function() {
        return `El libro "${this.titulo}" fue escrito por ${this.autor} y tiene ${this.paginas} páginas`
    }
}

const arrayLibros = [libro1, libro2, libro3];

arrayLibros.forEach(libro => {
    console.log(libro.resumen());
})