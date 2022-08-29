// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => showPosts(data))
// }

// function showPosts(posts) {
//     const postsContainer = document.getElementById('post-container');

//     for (const post of posts) {
//         const addDiv = document.createElement('div');
//         addDiv.innerHTML = `
//         <h3>User ${post.userId}</h3>
//         `
//     }
// }

// showPosts();

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);