// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

const createNewArr = (arr1, arr2) => [...arr1, ...arr2];
console.log(createNewArr([1, 2, 3], [4, 5, 6]));