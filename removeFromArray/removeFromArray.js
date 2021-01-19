const removeFromArray = function (inputArray, ...removeArgs) {
    let newArray = inputArray;

    for (x = 0; x < removeArgs.length; x++) {
        for (y = 0; y < newArray.length; y++) {
            if (newArray[y] === removeArgs[x]) {
                newArray.splice(y, 1);
            }
        }
    }
    return newArray;
}

module.exports = removeFromArray