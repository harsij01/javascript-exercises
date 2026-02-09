const reverseString = function(string) {
    finalString = "";
    for (i = string.length - 1; i >= 0; i--) {
        finalString += string[i];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
