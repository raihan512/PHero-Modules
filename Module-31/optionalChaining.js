const about = {
    fullName: 'Raihan Gazi',
    age: 27,
    address: {
        city: 'Dhaka',
        street: {
            first: 'West Mominbag',
            second: 'Kamrangir Char',
            third: 'Manik miar bari'
        },
    },
    firends: ['Borhan', 'Mamun', 'Shahadat']
}

const houseName = about.address?.street?.third;

console.log(houseName);