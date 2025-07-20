const fs = require("fs");

// when this code is run without an already created file named demo.txt, a new file at the given path will be created with the provided data and success message will be printed. if "data" is passed, the message displayed on console will be undefined because data has not been defined yet. instead, if you put some other message, it will be printed.
fs.writeFile("../demo.txt", "g26 hello", function(err, data) {
    if (err) return console.log(err);
    console.log("success!!!");
})

fs.writeFile("../demo2.txt", "this is my second file", function(err, data) {
    if (err) return console.log(err);
    console.log("created!!!");
})