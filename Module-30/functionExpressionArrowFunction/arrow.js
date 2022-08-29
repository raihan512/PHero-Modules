// Arrow function with multiple parameter
const multiply = (a, b) => a * b;
const multiplication = multiply(10, 20);

// Arrow function with single parameter
const doubleIt = a => a * 2;
const makeDouble = doubleIt(5);

// Arrow function without parameter
const sayHi = () => "Hi Mr. X, How are you?";
const greetings = sayHi();

// Arrow function with multiple lines
const addMultiplyDivise = (a, b, c) => {
    const add = a + b;
    const multiply = add * c;
    const divise = multiply / 2;
    return divise;
}
const summation = addMultiplyDivise(10, 20, 5);