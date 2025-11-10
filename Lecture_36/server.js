const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {Queue, Worker} = require('bullmq');
let CodeQueue = new Queue("code-queue", {
    connection: {
    host: 'localhost',
    port: 6379,
  },
})

app.post("/api/submission", async function(req, res){
    let {qId, code, language} = req.body
    // offload the job to message queue, so that worker can do the task
    let job = await CodeQueue.add("code-queue", {
        qId, code, language
    })
    // console.log(job.id)
    res.json({
        submissionId: job.id
    })
})

let worker = new Worker("code-queue", function(job){
    let {qId, code, language} = job.data
    // run code again all test cases and return the response
    setTimeout(()=>{
        console.log({
            qId: qId,
        success: true,
        time: "4ms",
        beat: "top 10%"
        })
        return {
        qId: qId,
        success: true,
        time: "4ms",
        beat: "top 10%"
    }
    }, 5000)
    
}, {
    connection: {
    host: 'localhost',
    port: 6379,
  },
})
worker.on("error", function(err){
    console.log(err)
})

app.listen(3030, ()=>{
    console.log("Server started")
})