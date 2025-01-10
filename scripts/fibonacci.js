function nthFibo(n) {
    if (n <= 0) {
        return "n должно быть больше или равно 1";
    }

    let a = 0, b = 1;

    if (n === 1) {
        return a;
    }

    for (let i = 2; i < n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b;
}

console.log(nthFibo(4)); // Вывод: 2
