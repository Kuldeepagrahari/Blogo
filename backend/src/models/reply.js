import {Schema, model} from "mongoose"

const replySchema = new Schema({
    authorId:{type:String, required:true},
    text:{type:String, required:true},
    likes:{type:String, required:true},
    createdAt:{ type: Date, default: Date.now }
 })
const Reply = new model("Reply",replySchema)
export default replySchema