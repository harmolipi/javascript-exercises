const reverseString = function (stringToReverse) {
    let finishedString = ``;
    
    for (i = 1; i <= stringToReverse.length; i++) {
        finishedString += stringToReverse.substr(i * -1, 1);
    }
    
    return finishedString;
}

module.exports = reverseString
