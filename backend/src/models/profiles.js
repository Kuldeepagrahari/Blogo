import {Schema, model} from "mongoose"

const profileSchema = new Schema({
    image:{
        type:String
    },
    tags:{type:String},
    about:{type:String},
    name:{type:String},
    degree:{type:String},
    job:{type:String},
    company:{type:String},
    skills:{type:String}
    
})

const Profile = new model("Profile", profileSchema)

export default Profile