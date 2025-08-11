// function to get a comment data
console.log(axios)
async function getComment(URL) {
    // how to send request using axios
    // axios.get(URL).then((data)=>{
    //     console.log(data)
    // })
    // .catch(err=>console.log(err))

    try {
        let comments = await axios.get(URL)
        console.log(comments);
    } catch (error) {
        console.log(error)
    }
}

getComment("https://jsonplaceholder.typicode.com/comments")
addBlog("http://localhost:3000/blog ","first blog", "first Bloggg")
//fucntion to add new Blof
async function addBlog(URL, title, description) {
    try {
        let newBlog = {
            title: title,
            description: description
        }
        let response = await axios.post(URL, newBlog)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}