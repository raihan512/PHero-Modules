// ================================Literal Way To Create Object================================
const obj = {
    name: 'Raihan',
    age: 27
}

// ==============================Constructor Way To Create Object==============================
const obj2 = new Object();

// =================================Use Class To Create Object=================================
class obj3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    countrey = 'Bangladesh';
}

// =================================Use Function To Creat Object=================================
function person(name, age) {
    this.name = name;
    this.age = age;
}

const rg = person('Raihan', 27);
const ba = person('Borhan', 26);