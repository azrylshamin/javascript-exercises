const fibonacci = function(sequenceNumber) {

    if (sequenceNumber < 0) return "OOPS";

    if (sequenceNumber == 0) return 0;

    if (sequenceNumber == 1) return 1;

    return (fibonacci(sequenceNumber - 1) + fibonacci(sequenceNumber - 2));
};

// Do not edit below this line
module.exports = fibonacci;
