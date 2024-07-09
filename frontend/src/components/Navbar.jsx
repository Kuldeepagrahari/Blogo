import React from 'react'
import "./compo.css"
const Navbar = () => {

  var isLogin = true;
  return (
    <div className='nav'>
      <img src="" alt="my_logo" />
      <ul>
        <li>Home</li>
        <li>Your Blogs</li>
        <li>Bloggers</li>
        <button>Admin</button>

      </ul>

     {isLogin == true? <><div className="profile">
      <button>Profile</button>
         <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R152793199&ga=GA1.1.1114204752.1718366789&semt=ais_user" alt="avatar" />

         <p>Username</p>
         
      </div></>:
      <div className="login-nav"><button>Login / Register</button></div>}


    </div>
  )
}

export default Navbar
