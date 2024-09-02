import Blog from "../models/BLog.js"


const postBlog = async(req, res) => {
    try{
        const blogdata = await Blog.create(req.body)
        if(blogdata) {
            res.status(200).json(blogdata)
        }else{
            res.status(400).json({message: "Blog not created" })
        }
    }catch(err){
       console.log(err)
    }
}
const getAllBlogs = async(req,res) => {
    try{
        const blogsdata = await Blog.find()
        if(blogsdata) {
            res.status(201).json(blogsdata)
        }else{
            res.status(401).json({message: "No blog available" })
        }
    }catch(err){
       console.log(err)
    }
}
const postComment = () => {

}
const postReply = () => {

}
export { postBlog, getAllBlogs , postComment, postReply}