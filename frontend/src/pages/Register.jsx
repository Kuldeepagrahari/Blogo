import React from 'react'
import my_pic from '../assets/my_pic.jpg'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className='login'>
    <div className="login-big-box">
    <div className="login-album">
      <h1>SamBlogs.</h1>
      <img src={my_pic} alt="" />
    </div>
    <form className="login-box">
      <h1>Register</h1>
      
      <input type="text" placeholder='Username'/>
      <input type="email" placeholder='Email' />
      <input type="password" placeholder='Password' />
     <Link to="/"> <button id='submit'>Sign In</button></Link>
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
