import { Schema, model } from "mongoose";

const blogSchema = new Schema({
    authorId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    commentId:{type:String, required:true},
    likes: {
        type: Number,
        default: 0
    },
    createdAt:{ type: Date, default: Date.now }
});

const Blog = model("Blog", blogSchema);

export default Blog;
