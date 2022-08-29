const loadData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = (users) => {
    console.log(users);
    const userContainer = document.getElementById('user-area');
    for (const user of users) {
        let userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <address>City: ${user.location.city} Country: ${user.location.country}<address>
        <p>Gender: ${user.gender}</p>
        <p>Age: ${user.registered.age}</p>
        <p>Email: ${user.email}</p>
        `
        userContainer.appendChild(userDiv);
    }
}

loadData();