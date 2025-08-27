// signup feature
let signupForm = document.querySelector("#signup-form")
let signupName = document.querySelector("#signup-name");
let signupEmail = document.querySelector("#signup-email");
let signupPassword = document.querySelector("#signup-password");

signupForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    let nameValue = signupName.value;
    let emailValue = signupEmail.value;
    let passwordValue = signupPassword.value;
    let response = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({username:nameValue, email:emailValue, password:passwordValue}),
        headers: {
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data)
    if(data.success==true){
        alert("Signup successfull "+data.data.username+" please login to continue")
        signupForm.reset()
    }
})

// login feature

let loginForm = document.querySelector("#login-form");
let loginEmail = document.querySelector("#login-email");
let loginPasseord = document.querySelector("#login-password");

loginForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let emailValue = loginEmail.value;
    let passwordValue = loginPasseord.value;
    let resposne = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify({email: emailValue, password: passwordValue}),
        headers:{
            "content-type": "application/json"
        }
    })
    let data = await resposne.json()
    console.log(data)
    if(data.success){
        let token = data.token
        localStorage.setItem("token", token);
        alert("Login Sucessfull")
    }
})