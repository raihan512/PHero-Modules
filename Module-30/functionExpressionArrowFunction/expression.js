// Function expression with name
const sum = function add(one, two) {
    const total = one + two;
    return total;
}

const result = sum(20, 30);
console.log(result);

// Function expression without name also called anonymous function
const multiply = function (one, two) {
    const result = one * two;
    return result;
}

const multiplication = multiply(5, 6);
console.log(multiplication);