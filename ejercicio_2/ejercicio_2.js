function recursiva(n) {
    n = Number.parseInt(n);

    if (n === 0) {
        return;
    }

    console.log("bauuuuba");
    recursiva(n - 1);
}

recursiva(5);