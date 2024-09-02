import React from 'react'
import "./admin.css"
import my_pic from "../assets/my_pic.jpg"
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Admin = () => {
  return (
    <div className='admin'>
 
        <div className="admin-left">
          <div className="admin-left-left">
              <img src={my_pic} alt="me" />
              <h1 style={{color:"black", fontSize:"1.5vw",fontWeight:"bold", margin:"2vh 0"}}>Kuldeep Agrahari</h1>
              <h4>Btech 2026 || CSE || MERN Stack Developer || PDPM IIITDM Jabalpur</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit temporibus quibusdam, ducimus aperiam suscipit, obcaecati voluptas excepturi ipsum asperiores velit.</p>
              

          </div>
          <div className="admin-left-right">
           <div className="admin-left-right-top">
             <h1>Follow Me</h1>
             <div className="social-links" style={{display:"flex", flexDirection:"row"}}>
             <Link style={{backgroundColor:"blue", border:"none"}}><span style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"1vw", width:"100%", }} ><FaLinkedin/> LinkedIn</span></Link>
             <Link style={{backgroundColor:"black", color:"white", padding:"0"}}><span style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"1vw", width:"100%"}}>
             <BsTwitterX/>Twitter</span></Link>
             <Link><span style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"1vw", width:"100%"}}><BsGithub/>GitHub</span></Link></div>

            
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
