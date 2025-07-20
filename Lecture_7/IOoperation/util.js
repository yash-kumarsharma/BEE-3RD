const fs = require("fs");

function read(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", function(err, data) {
            if (err) return reject(err);
            let users = JSON.parse(data);
            resolve(users);
        })
    })
}

function write(filepath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, JSON.stringify(data), function(err) {
            if (err) return reject(err);
            resolve("content written!!");
        })
    })
}

module.exports.read = read;
module.exports.write = write;