let product=[
{
    name:"samsung",
    amount:70000,
    quantity: 10
},
{
    name:"Iphone 16",
    amount:100000,
    quantity: 0
}
]

function buyProduct(product_Name) {
    return new Promise((resolve, reject) => {
        let isProduct = product.filter((p) => p.name==product_Name)[0];
    if (!isProduct) {
        return reject("product is not available")
    }
    resolve(isProduct.amount);
    })
}

let availableAmount = 800000
function deductbankamount(amount) {
    return new Promise((resolve, reject) => {
        if (amount > availableAmount) {
            return reject("bank balance is low")
        } else {
            availableAmount -= amount;
            resolve("amount deducted");
            //cb(null, "amount deducted");
        }
    })
}


// buyProduct("Iphone 16").then((amount) => {
//     console.log(amount)
//     return deductbankamount(amount)
// })
// .then((amount) => {
//     console.log(amount)
// })
// .catch((err) => {
//     console.log(err)
// })

// console.log("start")
// let a = 10;
// let b = 15;
// let c = a + b;

// function sum(a, b) {
//     return a + b
// }
// let result = sum(5, 4);
// console.log(result)

// Async Await:
let amount = await buyProduct("Iphone 16");
let mes = await deductbankamount(amount);
console.log(mes)