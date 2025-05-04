const palindromes = function (str) {
    str = str.toLowerCase().split('').filter(char => {
                return /[a-zA-Z0-9 ]/.test(char);
                }).join('').split(' ').join('');
    
    strArr = str.split('');
    if (str === strArr.reverse().join('')) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
