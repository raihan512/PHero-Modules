// isNan return true if the passed parameter is not a number otherwise it returns false
let a = isNaN('2');
let b = isNaN(2);
let c = isNaN('abc');

console.log(a);
console.log(b);
console.log(c);

// IsNaN return false for array
let d = isNaN([]);
console.log(d);