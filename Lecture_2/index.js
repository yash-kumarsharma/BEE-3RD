function sum(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

// module.exports = {
//     sum,
//     sub
// }

module.exports.sum=sum;                               //more preferred
module.exports.sub=sub;

//commonJS module system ---- require()