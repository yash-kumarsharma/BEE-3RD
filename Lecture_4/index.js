//REVISE CALLBACK AND PROMISE

// function buyProduct(product_Name, cb){
//     //do some async operation
//     setTimeout(()=>{
//         //all operation completed
//         console.log("all i/o operation is completed and order details are written in user data")
//         cd();
//     }, 0)
// }

// buyProduct("Iphone 16", function(){
//     console.log("product is purchased")
// })


let product = [{
    name: "samsung",
    amount: 70000,
    quantity: 10
},
{
    name:"Iphone 16",
    amount: 100000,
    quantity: 0
}]


function buyProduct(product_Name, cb){
    //do some async opeartion
    let isProduct = product.filter((p)=> p.name==product_Name)[0];
    if(!isProduct){
        return cb("product is not available", null);
    }
    cb(null, isProduct.amount);
}

let availableAmount = 800000
function deductbankamount(amount, cb){
    // do some bank transcations
    if(amount>availableAmount){
        return cb("bank balance is low", null);
    } else {
        availableAmount -= amount;
        cb(null, "amount deducted")
        cb(null, "amount deducted")
    }
}

buyProduct("Iphone 16", function(err, amount){
    if(err) return console.log(err);
    console.log(amount);
    deductbankamount(amount, function(err, message){
        if(err) return console.log(err)
            console.log(message);
    })
})

buyProduct("Iphone")
.then((data)=>{
    
})

const fs = require("fs")

fs.readFile("filepath", "utf-8", (err, data)=>{

})