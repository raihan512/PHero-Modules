const raihan = {
    name: 'Raihan Gazi',
    age: 27,
    Job: 'Web Designer',
    skills: ['Html', 'CSS', 'JS']
}

Object.freeze(raihan);

delete raihan.name;
raihan.isVoter = true;
raihan.Job = 'Engineer';

console.log(raihan);

// const objectKeys = Object.keys(raihan);
// const objectValues = Object.values(raihan);
// const objectEntries = Object.entries(raihan);

// console.log(objectKeys);
// console.log(objectValues);
// console.log(objectEntries);

// Object.seal(raihan);

// raihan.name = 'RG06';
// delete raihan.age;
// raihan.isVoter = true;
// console.log(raihan);