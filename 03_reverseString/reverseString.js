const reverseString = function(string) {
    let result = "";

    for (let i = 1; i <= string.length; i++) {
        result += string.at(0-i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
