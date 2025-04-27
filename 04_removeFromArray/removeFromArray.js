const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        while (array.includes(element)){
            for (let i = 0; i < array.length; i++) {
                if (array[i] === element) {
                    array.splice(i, 1);
                }
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
