const { WebSocketServer } = require("ws")
const { v4 : uuidv4 } = require("uuid")
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

// let allSocket = []
// wss.on("connection", function(socket){
//     console.log("User connected")
//     allSocket.push(socket);
//     socket.on("message", function(message){
//         console.log("message recieved: " + message.toString())
//         allSocket.forEach((s)=>{
//             s.send(message.toString())
//         })
//     })
// })
let rooms = new Map();

wss.on("connection", (socket)=>{
    console.log("A new user connected")
    socket.on("message", function(message){
        let parsedMessage = JSON.parse(message)
        let {type, payload} = parsedMessage;
        if(type=="join"){
            let {roomId} = payload
            if(!rooms.get(roomId)){
                rooms.set(roomId, new Set())
            }
            rooms.get(roomId).add(socket)
            console.log(rooms)
            socket.roomId = roomId
            socket.send("Added to room")
        } else if(type=="chat"){
            let {message} = payload
            let {roomId} = socket
            let allClients = rooms.get(roomId);
            allClients.forEach(s => {
                s.send(message)
            })
        } else if(type=="create"){
            let roomId = uuidv4();
            socket.send(JSON.stringify({
                type: "create",
                payload: {
                    roomId: roomId
                }
            }))
        }
    })
})