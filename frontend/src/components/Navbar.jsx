import React from 'react'
import { Link } from 'react-router-dom'
import "./compo.css"
import logo from "../assets/SamBlogs3.png"
import Login from '../pages/Login'
const Navbar = () => {

  var isLogin = false;
  return (
    <div className='nav'>
      <span className='logo'><h1>Sam</h1><h1>BLOGS.</h1></span>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/myblogs"><li>Your Blogs</li></Link>
        
        <li>Bloggers</li>
        <Link to="/admin"><button>Admin</button></Link>
        

      </ul>

     {isLogin == true? <><div className="profile">
      <button>Profile</button>
         <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R152793199&ga=GA1.1.1114204752.1718366789&semt=ais_user" alt="avatar" />

         <p>Username</p>
         
      </div></>:
      <div className="login-nav" >
        <button><Link to="/login">Login / Register</Link></button>
       </div>}


    </div>
  )
}

export default Navbar
