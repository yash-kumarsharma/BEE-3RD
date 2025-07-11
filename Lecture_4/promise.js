let p = new Promise((resolve, reject)=>{
    resolve("promise done")
})
// console.log(p)

p.then((data)=>{
    console.log(data)
})
p.catch((err)=>{
    console.log(err)
})

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


function buyProduct(product_Name){
    //do some async opeartion
    return new Promise((resolve, reject)=>{
        let isProduct = product.filter((p)=> p.name==product_Name)[0];
        if(!isProduct){
            return reject("not available")
        }
        resolve(isProduct.amount)
    })
}

buyProduct("Iphon").then((amount)=>{
    console.log(amount)
})
.catch((err)=>{
    console.log(err)
})