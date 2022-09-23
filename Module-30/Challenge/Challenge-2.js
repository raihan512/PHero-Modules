// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

const evenNamedFriends = arr => {
    const even = [];
    for (const i of arr) {
        if (i.length % 2 === 0) even.push(i);
    }
    return even;
}


const friends = ['Borhan', 'Mamun', 'Shahadat', 'Mursalin', 'Rajib', 'Rafique'];
const res = evenNamedFriends(friends);
console.log(res);