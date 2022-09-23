document.getElementById('add').addEventListener('click', function () {
    const name = document.getElementById('name-field');
    const nameValue = name.value;
    // console.log(nameValue);

    localStorage.setItem('name', nameValue);
})

// comment added from browser