let users = [
    {
        name: "Saanvi",
        age: "23",
        address: "Bombay"
    },
    {
        name: "Tia",
        age: "21",
        address: "Hyderabad"
    }
]
const fs = require("fs");
fs.writeFile("../users2.txt", JSON.stringify(users), function(err) {
    if (err) return console.log(err);
    console.log("done!!");
})