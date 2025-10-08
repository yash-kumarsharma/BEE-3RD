const { WebSocketServer } = require("ws")

const wss = new WebSocketServer({port:8888})

// wss.on("connection", function(socket){
//     console.log("User connected")

//     socket.on("message", function(message){
//         console.log("message recieved: " + message.toString())
//         if(message.toString()=="ping"){
//             socket.send("pong")
//         }
//     })
// })

let allSocket = []
wss.on("connection", function(socket){
    console.log("User connected")
    allSocket.push(socket);
    socket.on("message", function(message){
        console.log("message recieved: " + message.toString())
        allSocket.forEach((s)=>{
            s.send(message.toString())
        })
    })
})