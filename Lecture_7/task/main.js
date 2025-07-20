// const fs = require("fs");
// fs.readFile("../users.txt", "utf-8", function(err1, data1) {
//     if (err1) return console.log(err1);
//     let users1 = JSON.parse(data1);
//     fs.readFile("../users2.txt", "utf-8", function(err2, data2) {
//         if (err2) return console.log(err2);
//         let users2 = JSON.parse(data2);
//         let users3 = [...users1, ...users2];
//         fs.writeFile("../users3.txt", JSON.stringify(users3), function(err) {
//             if (err) return console.log(err);
//             console.log("users written!!");
//             fs.readFile("../users3.txt", "utf-8", function(err, data) {
//                 if (err) console.log(err);
//                 console.log(JSON.parse(data));
//             })
//         })
//     })
// })

const fs = require("fs");
const { write } = require("../IOoperation/util");
fs.readFile("../users.txt", "utf-8", function(err, data) {
    if (err) console.log(err);
    let users1 = JSON.parse(data);
    fs.readFile("../users2.txt", "utf-8", function(err, data) {
        if (err) console.log(err);
        let users2 = JSON.parse(data);
        let allusers = users1.concat(users2);
        fs.writeFile("../allusers.txt", JSON.stringify(allusers), function(err) {
            if (err) console.log(err);
            console.log("all users written");
        })
    })
});

// async function main(filepath1,filepath2){
//     let user = await read(filepath1);
//     let user2 = await read(filepath2);
//     let allusers = user.concat(user2)
//     let message = await write(filepath3, allusers);
//     console.log(message);
// }
