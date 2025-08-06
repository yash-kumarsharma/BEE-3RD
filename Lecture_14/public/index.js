// function getUsersdata(URL){
//     fetch(URL)
//     .then((res)=>{
//         console.log(res);   
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }
// fetch return a promise and also data from fetch come in body which is an stream and cannot be rfead directly so we have to parse it using res.json
// res.json() also returns a promise on which .then can be used so we will use promise chaining here i.e: .then(()=>{}).then(()=>{})
// const list=document.querySelector(".Users")
let userContainer=document.querySelector(".user-container");
let ShowUser=document.querySelector(".ShowUser");
let Data=null;
function getUsersdata(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);
        return res.json();          
    })
    .then((data)=>{
        console.log(data);
// only showing username
    //     data.forEach(element => {
    // let li=document.createElement("li");
    // li.innerHTML=`<li>
    // <h1>${element.username}</h1>
    // </li>`
    // list.append(li);    
// });
// for all users
// data.forEach(element => {
//     displayUser(element);
//     });
Data=data;
    })
    .catch((err)=>{
        console.log(err);
    })
}
function displayUser(user){
    let li=document.createElement("li");
    li.setAttribute("class", "user-item")
    li.innerHTML=`<div class="user-info" >
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>

            <div class="user-btn">
                <button class="user-delete">Delete</button>
                <button class="user-edit">Edit</button>
            </div>`;
            userContainer.appendChild(li)            
}

ShowUser.addEventListener("click", ()=>{
    setTimeout(()=>{                // using setTimeout so that data is fetched first and then displayed.
     userContainer.innerHTML=""                         
    Data.forEach(element => {
        displayUser(element);
    });
    },1000)
   
})

// getUsersdata("https://jsonplaceholder.typicode.com/users");
// getUsersdata("http://localhost:3333/userData");

let regform=document.querySelector(".register");
let nameInput=document.querySelector("#name");
let usernameInput=document.querySelector("#username");
regform.addEventListener("submit", function(e){
     e.preventDefault();
    let name=nameInput.value;
    let username=usernameInput.value;
    addUser(name, username, "http://localhost:3000/adduser");
   
});
function addUser(name, username, URL){
    let data={
        name:name,
        username:username
    }
    fetch(URL,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    })
}


