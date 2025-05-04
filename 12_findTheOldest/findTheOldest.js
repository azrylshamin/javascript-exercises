const findTheOldest = function(peoples) {
    peoples.sort((a, b) => {
        const date = new Date()
        if (a.yearOfDeath === undefined){
            a.yearOfDeath = date.getFullYear();
        }
        
        if (b.yearOfDeath === undefined){
            b.yearOfDeath = date.getFullYear();
        }

        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    });

    return peoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
