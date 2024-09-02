import {Schema, model} from "mongoose"


const commentSchema = new Schema({
    postId : {type:String, required:true},
    authorId: { type: String, required: true },
    text: { type: String, required: true },
    likes:{type:String, required:true},
    replyId:{type:String, required:true},
    createdAt: { type: Date, default: Date.now }
}, { _id: false });

const Comment = new model("Comment",commentSchema)
export default Comment