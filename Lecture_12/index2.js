//1. create a new element using createElement function
//2. insert required data in that element using .innerHTML or innerText
//3. insert new element in parent conatiner using appendChild or append
let todo = {
    id: 234234,
    title: "Study"
}
let todoContainer = document.querySelector(".todocontainer")
function addToDo(todo){
    let li = document.createElement("li")
    li.innerHTML=`<div>
                <input type="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button>✏️</button>
                    <button>❌</button>
                </div>
            </div>`
    todoContainer.appendChild(li)
}
addToDo(todo)