const { WebSocketServer } = require('ws');

const ws = new WebSocketServer({ port: 8015 });

ws.on("connection", function(socket){
    console.log(socket)
    setInterval(()=>{
        socket.send("Yash Kumar Sharma")
    }, 500)
    socket.on("message", function message(data){
        console.log(data.toString())
    })
})