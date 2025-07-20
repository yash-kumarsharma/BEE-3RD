let users = [
    {
        id:1,
        name:"Nitesh",
        age:24
    },
    {
        id:2,
        name:"Ritik",
        age:16
    }
]

// function isAllowed(id) {
//     // id ka user dhundho, // can be done by using either filter or find or normal for loop
//     // fir uska age check kro > 18
//     // filter returns a new array
//     let user = users.filter((u) => {
//         return u.id==id
//     })[0]
//     console.log(user);
//     if (!user) return console.log("No user found")
//         if (user.age < 18) return console.log("Not eligible to vote")
//             return console.log("eligible to vote")
// }

// isAllowed(1);

function isAllowed(id) {
    new Promise((resolve, reject) => {
        let user = users.filter((u) => {
        return u.id==id
        })[0]
        console.log(user);
        if (!user) return console.log("No user found")
            if (user.age < 18) return console.log("Not eligible to vote")
                return console.log("eligible to vote")
        // id ka user dhundho, // can be done by using either filter or find or normal for loop
        // fir uska age check kro > 18
        // filter returns a new array
    })
}

isAllowed(1).then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})

console.log("start");
console.log("sum 2 numbers")