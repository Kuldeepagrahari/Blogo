// import React from 'react'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import "./myblogs.css"
const MyBlogs = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  // const config = {
  //   readonly: false, // all options from https://xdsoft.net/jodit/doc/
  //   toolbarSticky: false,
  //   style: {
  //     color: 'black',
  //   },
  //   defaultMode: '1',
  //   buttons: 'bold,italic,underline,strikethrough,eraser,ul,ol,font,fontsize,brush,paragraph,align',
  // };
  return (
   <div className='write-blogs'>
    <input type="text" placeholder='Blog title'/>
    <JoditEditor
    ref={editor}
    value={content}
    onChange={newContent=>setContent(newContent)}
    // config={config}
    
    />
    {/* <textarea name="blog" id="" cols="50" rows="100" placeholder='Write your blog..'></textarea> */}
    <button id="post-btn">Post</button>
   </div>
  )
}

export default MyBlogs

