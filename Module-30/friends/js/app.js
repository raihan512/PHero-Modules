document.getElementById('bg-btn').addEventListener('click', function () {
    let friends = document.getElementsByClassName('friends');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})