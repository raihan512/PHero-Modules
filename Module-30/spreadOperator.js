function add(a, b, c) {
    const total = a + b + c;
    return total;
}

const num = [10, 20, 30];
const result = add(...num);
console.log(result);