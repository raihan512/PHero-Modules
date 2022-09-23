// // Load Phone Data
// const loadPhone = async (searchPhone) => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     displayPhone(data.data);
// }

// // Handle Search Button
// document.getElementById('search-btn').addEventListener('click', function () {
//     toggleLoader(true);
//     const getPhoneField = document.getElementById('search-field');
//     const getPhoneName = getPhoneField.value;
//     loadPhone(getPhoneName);
// })

// // Display Phone Item on the UI
// const displayPhone = (phones) => {
//     const phoneContainer = document.getElementById('phone-container');
//     phoneContainer.textContent = '';
//     const showAll = document.getElementById('show-all');
//     if (phones.length > 9) {
//         showAll.classList.remove('hidden');
//         phones = phones.slice(0, 9);
//     } else {
//         showAll.classList.add('hidden');
//     }

//     const noPhoneFound = document.getElementById('no-phone-found');
//     if (phones.length === 0) {
//         noPhoneFound.classList.remove('hidden');
//     } else {
//         noPhoneFound.classList.add('hidden');
//     }

//     phones.forEach(phone => {
//         let phoneItem = document.createElement('div');
//         phoneItem.classList.add('border', 'border-blue-300', 'rounded-md', 'overflow-hidden', 'p-5');
//         phoneItem.innerHTML = `
//         <img src="${phone.image}" alt="">
//         <h3 class="text-2xl">${phone.phone_name}</h3>
//         <h5 class="text-xl font-bold text-green-500">Brand: ${phone.brand}</h5>
//         <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam minima cupiditate deserunt repudiandae placeat qui doloribus voluptas sapiente, totam sunt.
//         </p>
//         <button onclick="phoneDetails('${phone.slug}')" class="py-2 px-5 text-white rounded bg-blue-600 mt-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">See More</button>
//         `
//         phoneContainer.appendChild(phoneItem);
//     });

//     toggleLoader(false);
// }

// const toggleLoader = isLoading => {
//     const loader = document.getElementById('loader');
//     if (isLoading) {
//         loader.classList.remove('hidden');
//     } else {
//         loader.classList.add('hidden');
//     }
// }

// document.getElementById('search-field').addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         toggleLoader(true);
//         const getPhoneField = document.getElementById('search-field');
//         const getPhoneName = getPhoneField.value;
//         loadPhone(getPhoneName);
//     }
// })

// const phoneDetails = async (id) => {
//     const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
//     const data = await response.json();
//     const phoneTitle = document.getElementById('exampleModalLabel');
//     phoneTitle.innerText = `${data.data.name}`;
//     const modalBody = document.getElementById('modal-body');
//     modalBody.innerHTML = `
//     <img class="mx-auto" src="${data.data.image}" alt="">
//     <P>Brand: ${data.data.brand}</p>
//     <P>Storage: ${data.data.mainFeatures.storage}</p>
//     <P>Memory: ${data.data.mainFeatures.memory}</p>
//     <P>Chipset: ${data.data.mainFeatures.chipSet}</p>
//     <P>Sensors: ${data.data.mainFeatures.sensors}</p>
//     <P>Display Size: ${data.data.mainFeatures.displaySize}</p>
//     `
//     console.log(data.data);
// }
// loadPhone('iphone')



const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram);