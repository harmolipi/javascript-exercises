function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	total = 0;
    array.forEach(item => total += item);
/*     for (i=0; i < array.length; i++) {
        total += array[i];
    } */
    return total;
}

function multiply (array) {
	return array.reduce((a, b) => a * b, 1);
}

function power(num, exp) {
	total = 1;
	for (i = 1; i <= exp; i++) {
		total *= num;
	}
	return total;
}

function factorial(num) {
    let total = 1;
    for (i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}