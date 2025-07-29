//accessing elements
//1. using id
//2. using class
//3. using tag
//4. querySelector/querySelectorAll
// let el1 = document.getElementById("heading")  // return element
// console.log(el1)
// let el2 = document.getElementsByClassName("item")   // returns collection
// console.log(el2[0])
// let el3 = document.getElementsByTagName("p") // return collections
// console.log(el3)
// let el4 = document.querySelector("p")   // can pass tag, class or id any of 3
// let el5 = document.querySelector(".item")
// console.log(el4)
// console.log(el5)
// let el6 = document.querySelectorAll(".item")
// let ul = document.querySelector("#container")
// console.log(el6)

//DOM Properties
/*
innerText  returns visible text content, excluding hidden elements and styles
innerHTML
textContent  returns text content, icluding hidden elements and styles
*/ 
// let data = el4.innerText
// console.log(data)
// el4.innerText = "Changed using Js"
// let data2 = ul.innerHTML
// let data3 = ul.innerText
// let data4 = ul.textContent

// console.log(data2)
// console.log(data3)
// console.log(data4)
// uL.innerHTML=`<li class="item>item 4</li>
//         <li class="item>item 5</li>
//         <li class="item>item 6</li>` 
/*
getAttribute
setAttribute
classList
*/ 

// let el5 = document.querySelector(".item")
// console.dir(el5)
// console.dir(el5.getAttribute("id"))
// console.log(el5.getAttribute("class"))
// el5.setAttribute("id","js")
// console.log(el5.getAttribute("id"))
// el5.classList.add("delete")
// console.log(el5.classList.contains("delete"))
// el5.classList.remove("item")
// console.log(el5.classList)
/*
Element.addEventListner("event name", function(){

})
*/
let signupbtn = document.querySelector(".SignUp")
let form = document.querySelector("#signup")
signupbtn.addEventListener("click", function(){
    form.classList.toggle("hide")
})