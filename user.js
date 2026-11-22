const postListEl = document.querySelector(".post-list")
const id = localStorage.getItem("id")

async function renderPosts(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`)
  const posts = await response.json()
  postListEl.innerHTML = posts.map((post) => 
  postHTML(post)).join("")
}

renderPosts()

function onSearchChange(event) {
  renderPosts(event.target.value)
}

function postHTML(post) {
  return `
  <div class="post">
    <div class="post__title">${post.title}</div>
    <p class="post__body">${post.body}</p>
  </div>

  `}