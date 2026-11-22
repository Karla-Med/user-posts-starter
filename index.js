// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector(".user-list")

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  userListEl.innerHTML = users.map((user) => `
    <div class="user">
      <div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
          <h3>${user.name}</h3>
          <p><b>Email:</b> ${user.email}</p>
          <p><b>Phone:</b> ${user.phone}</p>
          <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
      </div>
    </div>
`).join("")
}

main()

function showUserPosts(id) {
  localStorage.setItem("id", id)
  window.location.href = "user.html"
}




