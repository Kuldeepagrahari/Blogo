import React from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import MyBlogs from './pages/MyBlogs'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile/:id" element={<Profile/>}></Route>
        <Route path="/write" element={<CreatePost/>}></Route>
        <Route path="/edit/:id" element={<EditPost/>}></Route>
        <Route path="/Post/post/:id" element={<PostDetails/>}></Route>
        <Route path="/myblogs/:id" element={<MyBlogs/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
