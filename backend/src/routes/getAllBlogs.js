import express from "express"
import { getAllBlogs } from "../controllers/blogController.js"

const allblogRouter = express.Router()

allblogRouter.route("/all-blogs", getAllBlogs)
export default allblogRouter