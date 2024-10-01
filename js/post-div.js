function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {

    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post)
        const postDiv = document.createElement('div');
        console.log(postDiv)
        postDiv.classList.add('post')
    
        postDiv.innerHTML = `
            <h1>Id:${post.userId}</h1>
            <h2>User:${post.title}</h2>
            <p>Description:${post.body}</p>
        `;
        postContainer.appendChild(postDiv)

    }   


}