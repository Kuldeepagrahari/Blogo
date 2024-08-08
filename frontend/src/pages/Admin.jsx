import React from 'react'
import "./admin.css"
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Admin = () => {
  return (
    <div className='admin'>
 
        <div className="admin-left">
          <div className="admin-left-left">
              <img src="" alt="me" />
              <h1>Kuldeep Agrahari</h1>
              <h4>Btech 2026 || CSE || MERN Stack Developer || PDPM IIITDM Jabalpur</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo cumque molestiae numquam voluptas itaque tempora explicabo? Illo deserunt temporibus quibusdam, ducimus aperiam suscipit, obcaecati voluptas excepturi ipsum asperiores velit.</p>
              

          </div>
          <div className="admin-left-right">
           <div className="admin-left-right-top">
             <h1>Follow Me</h1>
             <Link><FaLinkedin/></Link>
             <Link><BsTwitterX/></Link>
             <Link><BsGithub/></Link>

             <div className="my-blog-det">
              
             </div>
           </div>
           <div className="admin-left-right-bottom">

           </div>


          </div>
        </div>
        <div className="admin-right">
           <h1>Contact Me</h1>
           <div className="admin-contact">
            <form action="">
              <input type="text" placeholder='Your Name'/>
              <input type="email" name="" id="" placeholder='Your Email'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='write your message'></textarea>
              <button type='submit'>Send</button>
            </form>
             

           </div>
        </div>
        
      
    </div>
  )
}

export default Admin
