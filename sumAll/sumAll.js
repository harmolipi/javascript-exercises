const sumAll = function (x, y) {
    if (typeof x != `number` || typeof y != `number` || Math.sign(x) === -1 || Math.sign(y) === -1) {
        return `ERROR`;
    }

    let bigger;
    let smaller;
    let sum = 0;
    let sum2 = 0;

    if (x > y) {
        bigger = x;
        smaller = y;
    } else if (y > x) {
        bigger = y;
        smaller = x;
    } else {
        return x;
    }

    for (i = smaller; i <= bigger; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
