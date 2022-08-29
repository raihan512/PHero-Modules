// function doubleElement(arr) {
//     const res = [];
//     for (const i of arr) {
//         const doubleIt = i * 2;
//         res.push(doubleIt);
//     }
//     return res;
// }

// const numbers = [2, 3, 4, 5];
// const result = doubleElement(numbers);
// console.log(result);

// const trippleIt = num => num * 3;
// const makeTripple = trippleIt(5);
// console.log(makeTripple);

// // Map method can be used to reduce these upper code in a simpified way
// const threeTimes = numbers.map(trippleIt);
// console.log(threeTimes);

// const fiveTimes = numbers.map(x => x * 5);
// console.log(fiveTimes);

const num = [2,3,4]
num.map(function (value, index, arr) {
    console.log(1 + index + ' Item Number');
    console.log(value);
    console.log(index);
    console.log(arr);
})
