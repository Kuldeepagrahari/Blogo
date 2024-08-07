import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import my_pic from '../assets/my_pic.jpg'

const Login = () => {
  const navigate = useNavigate()

  const [userdata, setUserdata] = useState({
    email:"",
    password:""
  })

  const handleInput = (e) => {
    try{
         const {name, value} = e.target
         setUserdata({...userdata,[name]:value})
    }catch(err){
      console.log("server error")
    }
  }

  const handleSubmit = async(e) => {
    try{
      e.preventDefault()

      const response  = await fetch("http://localhost:5000/api/auth/login", {
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(userdata)

      })
      if(response){
        const data = await response.json()
        alert(`welcome ${data.name} to SamBlogs.`)
        console.log(data)
        navigate("/")
      }

    }catch(err){

    }
  }
  return (
    <div className='login'>
      <div className="login-big-box">
      <div className="login-album">
        <h1>SamBlogs.</h1>
        <img src={my_pic} alt="" />
      </div>
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" placeholder='Email' onChange={handleInput} name="email"/>
        <input type="password" placeholder='Password' onChange={handleInput} name="password"/>
        <button id='submit'>Sign In</button>
        <div className="login-or">
        <p>OR</p>
        <p>If you have not registered </p>
        <Link to="/register"><button className='or-btn'>Sign Up</button></Link>
        </div>
   

      </form></div>
    </div>
  )
}

export default Login
