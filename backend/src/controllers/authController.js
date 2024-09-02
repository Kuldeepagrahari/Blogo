import User from "../models/User.js"

const registerUser = async(req, res) => {
   try {

    const { email, name, phone, password} = req.body
    
    const isUserExist = await User.findOne({email:email})

    if(isUserExist){
      return res.status(400).json({msg:"User already exist"})
    }

    const userCreated = await User.create({
      name, 
      email,
      phone,
      password
    })

    res.status(200).json({msg:userCreated,token: await userCreated.generateToken()})
    
   } catch (error) {
       console.log(error)
       res.status(400).json(error)
   }
}

const loginUser = async ( req, res ) => {
   try {
      const {email, password} = req.body
      const user = await User.findOne({email:email})
      if(!user){
         return res.status(400).json({msg:"User not found"})
      }
      const isMatch = await user.isPasswordCorrect(password)
      if(!isMatch){
         return res.status(400).json({msg:"Invalid credentials"})
      }
      res.status(200).json({msg:user,token: await user.generateToken()})


    
   } catch (error) {
      res.status(401).json(error)
   }
}
export {registerUser, loginUser}