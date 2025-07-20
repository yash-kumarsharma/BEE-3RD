const fs = require("fs");

// fs.readFile("../demo.txt", "utf-8", function(err, data) {
//     if (err) return console.log(err);
//     fs.writeFile("../demo3.txt", data, function(err, mes) {
//         if (err) return console.log(err);
//         console.log("file 1 data written");
//         fs.readFile("../demo2.txt", "utf-8", function(err, data) {
//         if (err) return console.log(err);
//         fs.appendFile("../demo3.txt", " "+data, function(err, mes) {
//             if (err) return console.log(err);
//             console.log("file 2 data written");
//         })
//         })
//     })
// })

// fs.readFile("../demo.txt", "utf-8", function(err, data1) {
//     if (err) return console.log(err);
//     fs.readFile("../demo2.txt", "utf-8", function(err, data2) {
//         if (err) return console.log("error in second file");
//         fs.writeFile("./result.txt", data1 + "\n" + data2, function(err) {
//             if (err) console.log(err);
//             console.log("done");
//         })
//     })
// })

// if your files have spaces in between lines, then append the data of two files and write it in another file


console.log(process.argv);
// inputs in this array containing 2 elements can be taken as input in the terminal using
// node index.js 55 "hi" "true"
// for particular index insertion, put index after argv and then write command in terminal
// example -- process.argv[0]