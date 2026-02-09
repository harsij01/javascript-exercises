const repeatString = function(string, num) {
    let final_string = "";

    if (num >= 0) {
        for (i = 0; i < num; i++) {
            final_string += string;
        }
    } else {
        return "ERROR";
    }

    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
