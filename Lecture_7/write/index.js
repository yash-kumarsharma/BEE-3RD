let users = [
    {
        name: "Nitesh",
        age: "24",
        address: "Delhi"
    },
    {
        name: "Ritik",
        age: "25",
        address: "Faridabad"
    }
]
// const fs = require("fs");
// fs.writeFile("../users.txt", JSON.stringify(users), function(err) {
//     if (err) return console.log(err);
//     console.log("users written!!");
// })

const { write, read } = require("../IOoperation/util");
async function writeFile(filepath, content) {
    await write(filepath, content);
    console.log("content written!");
}
writeFile("../user1.txt", [{"name":"seerat"}]);




