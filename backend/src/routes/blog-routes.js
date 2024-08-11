import express from "express"
const blogRouter = express.Router()

import  { getAllBlogs, postBlog } from "../controllers/blogController.js"

blogRouter.route("/postBlogs").post(postBlog)
blogRouter.route("/getBlogs").get(getAllBlogs)


export default blogRouter