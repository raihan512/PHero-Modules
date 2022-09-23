const restCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showAllCountries(data))
}

const showAllCountries = countries => {
    // console.log(countries);
    const countriesHtml = countries.map(country => getCountry(country));
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHtml.join(' ');
}

// const getCountry = country => {
//     return `
//     <div class="country">
//     <h2>${country.name.common}</h2>
//     <img src = "${country.flags.png}">
//     </div>
//     `
// }

// const getCountry = country => {
//     const { name, flags } = country;
//     return `
//     <div class="country">
//     <h2>${name.common}</h2>
//     <img src = "${flags.png}">
//     </div>
//     `
// }
const getCountry = ({ name, flags }) => {
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src = "${flags.png}">
    </div>
    `
}

restCountries()