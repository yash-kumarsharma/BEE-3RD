let {PrismaClient} = require("./generated/prisma")
let prisma = new PrismaClient();
async function addUser(name, email, password){
    let newUser = await prisma.user.create({
        data:{
            email:email,
            password:password
        }
    })
    return newUser
}
// addUser("user@gmail.com", "user", "1234")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err.message))

async function addTweet(content, userId){
    await prisma.tweet.create({
        data: {
            content: content,
            userId: userId
        }
    })
}
// addTweet("my secondTweet", 4)
// .then((data)=>console.log("tweet is created"))

// find all tweet by user who's id is 1

async function getUserTweet(userId){
    let tweets = await prisma.tweet.findMany({
        where: {
            userId: Number(userId)
        }
    })
    return tweets;
}

// getUserTweet("1")
// .then((data)=>console.log(data))

// user who's id is one wants to update his tweets ---> tweet id is 1

async function updateTweet(tweetId, userId, updatedContent){
    let tweet = await prisma.tweet.findUnique({
        where: {
            id : Number(tweetId)
        }
    })
    if(!tweet){
        return "tweet doesnot exist"
    }
    if(tweet.userId!=Number(userId)){
        return "user can not update this tweet"
    }
    await prisma.tweet.update({
        where:{
            id: Number(tweetId)
        },
        data:{
            content: updatedContent
        }
    })
}

// updateTweet("1", "1", "Updated Tweet")
// .then(()=>{
//     console.log("Tweet updated")
// })


// user deleted
async function deleteUser(userId){
    let user = await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })
    return "user deleted"
}
// deleteUser("1")
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))

async function getUser(){
    let allUsers = await prisma.user.findMany({
        // select:{
        //     email: true,
        //     name: true,
        //     tweet: {
        //         select: {
        //             content: true
        //         }
        //     }
        // }
        include:{
            tweet: {
                select: {
                    content: true
                }
            }
        }
    })
    return allUsers
}
getUser()
.then((data=>{
    console.log(JSON.stringify(data))
}))

