const caesar = function (str, shift = 0) {
    let shiftedString = ``;
    let shiftedCode;

    if (shift % 26 === 0) return str;

    for (i = 0; i < str.length; i++) {
        let isUppercase = (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90);
        let isLowercase = (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122);
        let adjustedShift = shift % 26;

        if (isUppercase || isLowercase) {
            shiftedCode = str.charCodeAt(i) + adjustedShift;

            if ((isUppercase && shiftedCode > 90) || (isLowercase && shiftedCode > 122)) {
                shiftedCode -= 26;
            } else if ((isUppercase && shiftedCode < 65) || (isLowercase && shiftedCode < 97)) {
                shiftedCode += 26;
            }
        } else {
            shiftedCode = str.charCodeAt(i);
        }

        shiftedString += String.fromCharCode(shiftedCode);
    }
    return shiftedString;
}

module.exports = caesar
