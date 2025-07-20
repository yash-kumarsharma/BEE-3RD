const fs = require("fs");
// fs.readFile("../users.txt", "utf-8", function(err, data) {
//     if (err) return console.log(err);
//     let users = JSON.parse(data);
//     console.log(users[0].name);
// })

const { read } = require("../IOoperation/util")

async function readFile(filepath) {
    let data = await read(filepath);
    console.log(data);
}
readFile("../users.txt");