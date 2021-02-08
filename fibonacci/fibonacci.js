const fibonacci = function (int) {
    let previousFirst = 0;
    let previousSecond = 1;
    let fib = [1];
    int = checkNum(int);
    if (int === "OOPS") return int;

    for (i = 1; i < int; i++) {
        fib[i] = previousFirst + previousSecond;
        previousFirst = previousSecond;
        previousSecond = fib[i];
    }

    return fib[i - 1];
}

const checkNum = function (num) {
    num = Number(num);
    if (num <= 0 || isNaN(num)) {
        return "OOPS";
    }
    return num;
}

module.exports = fibonacci
