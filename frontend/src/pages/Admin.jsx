import React from 'react'
import "./admin.css"
const Admin = () => {
  return (
    <div className='admin'>
 
        <div className="admin-left">

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
