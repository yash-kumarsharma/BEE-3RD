let userContainer = document.querySelector('.user-container');
let registerForm = document.querySelector('.register');
let nameInput = document.querySelector('.name');
let usernameInput = document.querySelector('.username');
console.log(userContainer);
function getUserData(URL) {
    fetch(URL)
        .then((res)=> {
            console.log(res);
            return res.json()

        })
        .then((data)=> {
            console.log(data);
            data.forEach((user)=> {
                displayUser(user);
            });
        })
        .catch((err)=> {
            console.log(err);
        });
}
function displayUser(user){
    let li = document.createElement('li');
    li.setAttribute('class', 'user-item');
    li.innerHTML = `  <div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button class="user-delete">❌</button>
                <button class="user-edit">✏️</button>
            </div>`
            userContainer.appendChild(li);
}


// getUserData('https://jsonplaceholder.typicode.com/users')

getUserData('http://localhost:5500/users');

function addUser(name,username,URL){
    let data={
        name: name,
        username: username
    };
    fetch(URL, {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        if(data.success){
            alert("User added successfully");
            nameInput.value = '';
            usernameInput.value = '';
        }else{
            alert(data.error);
            nameInput.value = '';
            usernameInput.value = '';
        }
    })
    .catch((err) =>{
        console.error("Error adding user:", err);
        alert("Failed to add user. Please try again.");
    })

}

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    let name = nameInput.value;
    let username = usernameInput.value;
    addUser(name, username, 'http://localhost:5500/adduser');
});