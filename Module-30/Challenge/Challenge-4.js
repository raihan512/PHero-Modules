// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

const squareElement = arr => arr.map(i => i ** 2);
const squaredElement = squareElement([1, 2, 3]);
const sum = arr => {
    let res = 0;
    for (const i of arr) {
        res += i;
    }
    return res;
}
const summation = sum(squaredElement);
console.log(squaredElement);
console.log(summation);