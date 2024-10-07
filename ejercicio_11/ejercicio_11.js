function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

const estadistica = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
}

for (let i = 0; i < 36_000; i++) {
    const numero1 = lanzarDado();
    const numero2 = lanzarDado();
    const suma = numero1 + numero2;

    estadistica[suma]++;
}

console.table(estadistica);