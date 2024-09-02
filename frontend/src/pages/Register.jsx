import React, { useState } from 'react'

import {Link} from 'react-router-dom'
import "../components/compo.css"
import { useNavigate } from 'react-router-dom'
import mobile from "../assets/B.png"

const Register = () => {
  const navigate = useNavigate()
  const [userdata, setUserdata] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
   
  const handleInput = (e) =>{
      try{
         const {name, value} = e.target
         setUserdata({...userdata, [name]:value})
         console.log(userdata)
      }catch(err){
          console.log(err)
      }
  }

  const handleSubmit = async(e) => {
     try{
      e.preventDefault()

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userdata)
      })

      if(!response){
        console.log("api error")
      }
      else{
        const data = await response.json()
        alert(`Welcome ${data.name} to SamBlogs.`)
        navigate("/")
        console.log(data);
      }
      console.log(userdata)

     }catch(err){
       console.log("server error")
     }
  }
  return (
    <div className='login'>
    <div className="login-big-box">
    <div className="login-album">
      
      <img src={mobile} alt="" />
    </div>
    <form className="login-box" onSubmit={handleSubmit}>
      <h1>Register</h1>
      
      <input type="text" placeholder='Username' onChange={handleInput} name="name"/>
      <input type="email" placeholder='Email' onChange={handleInput}  name="email"/>
      <input type="tel" placeholder='Phone' onChange={handleInput} name="phone"/>
      <input type="password" placeholder='Password' onChange={handleInput}name="password" />
      <button id='submit'>Sign Up</button>
      <div className="login-or">
      <p>OR</p>
      <p>If you have registered </p>
      <Link to="/login"><button className='or-btn'>Sign In</button></Link>
      </div>
 

    </form></div>
  </div>
  )
}

export default Register
