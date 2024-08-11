import {Schema, model} from "mongoose"

const blogSchema = new Schema({
    owner:{
        type:String
    },
    title:{
        type:String, 
        required:true
    },
    content:{
        type:String, 
        required:true
    },
    comment:{
        type:String
    },
    likes:{
        type:String
    }
   
})

const Blog = new model("Blog", blogSchema)

export default Blog