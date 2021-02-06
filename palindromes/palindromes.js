const palindromes = function (myString) {
    let simplified = myString
        .toLowerCase()
        .replace(/[.,!*+\-?^${} ()|[\]\\]/g, '');
    let reverseString = string => {
        newString = string[string.length - 1];
        for (i = string.length - 2; i >= 0; i--) {
            newString += string[i];
        }
        return newString;
    }


    return simplified === reverseString(simplified);
}

module.exports = palindromes
