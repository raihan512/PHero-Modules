const obj1 = {
    a: 10,
    b:20
}

const obj2 = { ...obj1 };

obj1.a = 100;
obj1.b = 200;

console.log(obj1);
console.log(obj2);