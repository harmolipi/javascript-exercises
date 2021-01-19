const repeatString = function(stringToRepeat, num) {
    let newString = ``;

    if (num < 0) {
        newString = `ERROR`;
        return newString;
    }

    for (i=0; i < num; i++) {
        newString += stringToRepeat;
    }
    return newString;
}

module.exports = repeatString
