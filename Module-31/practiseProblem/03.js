// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const num = [10, 20, 30];

const squareArrayElement = arr => arr.map(n => n ** 2);
const res = squareArrayElement(num);
// console.log(res);

const sumOfSquaredElement = arr => {
    let sum = 0;
    arr.map(n => sum += n);
    return sum;
}
const res2 = sumOfSquaredElement(res);
// console.log(res2);
const avg = res2.reduce(function (previous, current) {
    let output = previous + current;
    return output;
}, 0)
// console.log(avg);