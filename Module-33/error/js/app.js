const loadUser = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(response => response.json())
        .then(data => diplayData(data))
        .catch(error => console.log(error))
}


const loadUserAsync = async () => {
    const url = 'https://randomuser.me/api/?gender=female';
    try {
        const response = await fetch(url);
        const data = await response.json();
        diplayData(data.results[0]);
    } catch (error) {
        console.log(error);
    }

}



const diplayData = user => {
    console.log(user);
}
loadUser()
loadUserAsync()