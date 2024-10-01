
// post shown in a paragragh

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const postList = document.getElementById('post-container');
    for (const post of data) {
        // console.log(post)
        const p = document.createElement('p');
        p.innerText = post.title;
        postList.appendChild(p)
    }
}