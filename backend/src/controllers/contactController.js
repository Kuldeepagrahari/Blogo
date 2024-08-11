import Contact from "../models/contact.js";

const ContactController = async(req, res) => {
   try{
    const contactdata = await Contact.create(req.body)
    if(contactdata){
        res.status(200).json(contactdata)
    }else{
        res.status(400).json("contact msg not send")
    }

   }catch(err){
    console.log(err)
   }
}

export default ContactController 