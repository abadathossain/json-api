function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.username;
        ul.appendChild(li)
    }

}

