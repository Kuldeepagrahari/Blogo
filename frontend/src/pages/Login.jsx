import React from 'react'
import { Link } from 'react-router-dom'
import my_pic from '../assets/my_pic.jpg'
const Login = () => {
  return (
    <div className='login'>
      <div className="login-big-box">
      <div className="login-album">
        <h1>SamBlogs.</h1>
        <img src={my_pic} alt="" />
      </div>
      <form className="login-box">
        <h1>Login</h1>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password' />
       <Link to="/"> <button id='submit'>Sign In</button></Link>
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
