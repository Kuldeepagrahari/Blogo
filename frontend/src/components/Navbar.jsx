import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./compo.css"
import logo from "../assets/Blogger.png"
import Login from '../pages/Login'
const Navbar = () => {

  var isLogin = true;
  return (
    <div className='nav'>
      <span className='logo'><img src={logo} style={{height:"11vh", borderRadius:"10px",boxShadow:"5px 5px 10px black"}}alt="" /></span>
      <ul>
        <NavLink style={({ isActive }) => ({ borderBottom: isActive ? '3px solid violet' : '' , paddingBottom: isActive ? '0.5vh' : ""})} to="/"><li>Home</li></NavLink>
        <NavLink style={({ isActive }) => ({ borderBottom: isActive ? '3px solid violet' : '' , paddingBottom: isActive ? '0.5vh' : ""})} to="/myblogs"><li>Write Blogs</li></NavLink>
        <NavLink style={({ isActive }) => ({ borderBottom: isActive ? '3px solid violet' : '',paddingBottom: isActive ? '0.5vh' : "" })} to="/Bloggers">  <li>Bloggers</li></NavLink>

        <NavLink style={({ isActive }) => ({ borderBottom: isActive ? '4px solid orangered' : '' , paddingBottom: isActive ? '1vh' : ""})} to="/admin"><button>Admin</button></NavLink>


      </ul>

      {isLogin == true ? <><div className="profile">
        <NavLink to="/profile" style={({ isActive }) => ({ borderBottom: isActive ? '4px solid white' : '' , paddingBottom: isActive ? '0.5vh' : ""})}>
          <button >Profile</button></NavLink>
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R152793199&ga=GA1.1.1114204752.1718366789&semt=ais_user" alt="avatar" />

        <p>Username</p>

      </div></> :
        <div className="login-nav" >
          <button><Link to="/login">Login/Register</Link></button>
        </div>}


    </div>
  )
}

export default Navbar
