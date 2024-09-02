import express from "express"
const blogRouter = express.Router()

import  { getAllBlogs, postBlog , postComment, postReply} from "../controllers/blogController.js"

blogRouter.route("/add-blog").post(postBlog)
blogRouter.route("/add-comment").post(postComment)
blogRouter.route("/add-reply").post(postReply)


export default blogRouter