let container = document.querySelector(".container")

function getUsersData(URL){
    fetch(URL)
    .then((data)=>{
        console.log(data);
        data.forEach((data)=>{
            displayUser(data)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

function displayUser(user){
    let li = document.createElement("li")
    li.setAttribute("class","item")
    li.innerHTML=`<div>
                    <p>${user.name}</p>
                    <p>${user.age}</p>
                </div>`
    container.appendChild(li)
}

getUsersData("http://localhost:3000/user")