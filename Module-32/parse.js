const restuarent = {
    owner: 'Raihan Gazi',
    address: {
        city: 'Dhaka',
        road: 'Beribadh'
    },
    starter: ['French Fry', 'Chicken Fry', 'Pasta'],
    isOpen: true,
    tables: 30
}

const aboutRestuarant = JSON.stringify(restuarent);
console.log(aboutRestuarant);

const covertToObj = JSON.parse(aboutRestuarant);
console.log(typeof covertToObj);
console.log(covertToObj);
