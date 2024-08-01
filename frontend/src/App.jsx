import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import MyBlogs from './pages/MyBlogs'
import Admin from './pages/Admin'
import HomeDisplay from './pages/HomeDisplay'
const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeDisplay/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile/:id" element={<Profile/>}></Route>
        <Route path="/write" element={<CreatePost/>}></Route>
        <Route path="/edit/:id" element={<EditPost/>}></Route>
        <Route path="/Post/post/:id" element={<PostDetails/>}></Route>
        <Route path="/myblogs" element={<MyBlogs/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
 
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
