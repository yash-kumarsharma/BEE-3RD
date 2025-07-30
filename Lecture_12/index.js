let box = document.querySelector(".box")
let genbtn = document.querySelector(".btn")
let colors = ["red", "yellow", "blue", "pink", "green", "black", "grey", "purple", "cyan", "grey"]
let stopbtn = document.querySelector(".stop")
function randomColor(){
    let index = Math.floor(Math.random()*10)
    let color = colors[index]
    return color
}

let intervalId = null

genbtn.addEventListener("click", function(){
    // let color = randomColor();
    // box.style.background = color;
    intervalId = setInterval(()=>{
        let color = randomColor()
        box.style.background = color;
    }, 500)
})

stopbtn.addEventListener("click", function(){
    if(intervalId){
        clearInterval(intervalId)
    }
})