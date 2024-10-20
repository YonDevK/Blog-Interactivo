// Archivo: script.js

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    
    if (title && content) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, content });
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        this.reset();
    }
});

function displayPosts() {
    let postList = document.getElementById('post-list');
    postList.innerHTML = '';

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(function(post, index) {
        let postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postList.appendChild(postDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);
