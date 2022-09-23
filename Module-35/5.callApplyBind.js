const raihan = {
    name: 'Raihan Gazi',
    age: function (birthYear) {
       return 2022 - birthYear;
    }
}
const borhan = {};
const mamun = {};

// ========================Call Method========================
const raihanAge = raihan.age(1997)
const borhanAge = raihan.age.call(borhan, 1996);
const mamunAge = raihan.age.call(mamun, 2000);

console.log(raihanAge);
console.log(borhanAge);
console.log(mamunAge);

// =======================Apply Method=======================
// const raihanAge = raihan.age(1997)
// const borhanAge = raihan.age.apply(borhan, [1996]);
// const mamunAge = raihan.age.apply(mamun, [2000]);

// console.log(raihanAge);
// console.log(borhanAge);
// console.log(mamunAge);

// ========================Bind Method========================
// const raihanAge = raihan.age(1997)
// const borhanAge = raihan.age.bind(borhan);
// const mamunAge = raihan.age.bind(mamun);

// console.log(raihanAge);
// console.log(borhanAge(1996));
// console.log(mamunAge(2000));