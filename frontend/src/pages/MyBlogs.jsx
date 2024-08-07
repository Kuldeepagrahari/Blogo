import React from 'react'
import "./myblogs.css"
const MyBlogs = () => {
  return (
   <div className='write-blogs'>
    <input type="text" placeholder='Blog title'/>
    <textarea name="blog" id="" cols="50" rows="100" placeholder='Write your blog..'></textarea>
    <button>Post</button>
   </div>
  )
}

export default MyBlogs

