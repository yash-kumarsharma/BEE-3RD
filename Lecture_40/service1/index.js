let {createClient} = require("redis")
let client = createClient();

async function notify(){
    // await client.connect() so that notify doesn't run before connect
    await client.PUBLISH("notify-me", JSON.stringify({id: 1, message: "Iphone Back in Stock", email: "yash@gmail.com"}))
}

setTimeout(()=>{
    notify()
},2000)

client.connect()
.then(()=>console.log("redis connected"))