import React from 'react'
import logo from "../assets/SamBlogs.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="motive">
      <span className='logo'><h1>Sam</h1><h1>BLOGS.</h1></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro consectetur velit sit et omnis laudantium mollitia ipsam, repellendus sequi repudiandae eos commodi ad deleniti quidem nam ea magni ullam.</p>
      </div>
      <div className="contact">
        <p><img src="https://img.icons8.com/?size=100&id=12623&format=png" alt="" />kuldeepagrahari9103@gmail.com</p>
        <p><img src="https://img.icons8.com/?size=100&id=9730&format=png" alt="" />8957298885</p>

      </div>
      <div className="social-links">
        <h1>Follow Me At</h1>
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
        <a href="">GitHub</a>
      </div>

    </div>
  )
}

export default Footer
