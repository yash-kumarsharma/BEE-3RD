const Blogs = require('../model/blog')

module.exports.postaddBlog = async (req, res) => {
    let { title, body, userId } = req.body
    let userExist = await Users.findById(userId);
    if(userExist){
    // console.log(title, body);
    // res.send("Got it")
    let newBlog = new Blogs({
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
    })
    userExist.blogs.push(newBlog._id)
    await newBlog.save()
    await userExist.save()

    res.json({
        success: true,
        data: newBlog,
        message: "Blog added successfully"
    })
    }
}

module.exports.getreadBlog = async (req, res)=>{
    let allblog = await Blogs.find();  // returns all data
    res.json({
        success: true,
        data: allblog
    })
}

module.exports.getOneBlog = async (req, res)=>{
    let {id} = req.params
    let blog = await Blogs.findOne({_id:id});
    res.json({
        success: true,
        data: blog
    })
}

module.exports.deleteOneBlog = async(req, res)=>{
    let {blogId} = req.params;
    let {userId} = req.body;

    let blogExist = await Blogs.findById(blogId);
    if(!blogId) return res.json({
        success: false,
        message: "Blog does not exist"
    })
    if(blogExist.userId!=userId) return res.json({
        success: false,
        message: "Not allowed to delete"
    })
    await Blogs.findByIdAndDelete(blogId);
    let userExist = await Users.findById(userId);
    let blog = userExist.blogs.filter((id)=> id!=blogId)
    userExist.blogs = blog
    await userExist.save();
    res.json({
        success: true,
        message: "Blog deleted successfully",
        data: userExist
    })
}


module.exports.putUpdateBlog = async(req, res)=>{
    let {blogId} = req.params
    let {title, body} = req.body

    let blogExist = await Blogs.findById(blogId)
    if(!blogId) return res.join({
        success: false,
        message: "Blog not found"
    })

    await Blogs.findByIdAndUpdate(blogId, {
        title: title,
        body: body
    })
    res.json({
        success: true,
        message: "Blog Updated Successfully"
    })
}