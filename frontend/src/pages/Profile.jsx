import React from 'react'
import "../components/Home.css"
import { FcLike } from "react-icons/fc";
import { IoMdShare } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import "./profile.css"
const Profile = () => {
  return (
    <div className='profile-page'>

      <div className="profile-cont">
        <div className="left">
          <div className="left-left">
            <img src="https://i.pinimg.com/474x/b8/fe/18/b8fe185770d09f819047aebcbebf9899.jpg" alt="" />
            <h3 style={{fontSize:"1.2vw", color:"gold", marginTop:"4vh", height:"8vh", boxSizing:"border-box", width:"80%"}}> King of Cricket || WC 2011, 2024 winner</h3>
            <p style={{fontSize:"1vw", marginTop:"1vh", height:"30vh", display:"flex", width:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio reiciendis dolorum autem aperiam molestiae distinctio repudiandae </p>
          </div>
          <div className="left-right">
            <h1>Virat Kohli</h1>
            <h3>Company</h3>
            <h3>Degree</h3>
            <h3>Current job</h3>
            <h4>Num of Posts</h4>
            <h4>Total Followers</h4>
            <h4>Total Likes</h4>


          </div>


        </div>

        <div className="right">
          <div className='home-content'>
            <div className="home-container">

              <div className="home-blog-card">
                <h2>name</h2>
                <div className="card-top">
                  <h3>
                    Topic
                  </h3>
                  <p>date</p>
                </div>

                <p id='desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere deleniti repellendus expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi 
                </p>

                <div className="card-bottom">
                  <button id='read-full'>Read Full..</button>
                  <div className="card-react-btns">
                    <button> <FcLike /></button>
                    <button><IoMdShare /></button>
                    <button><FaComment /></button>
                  </div>
                </div>


              </div>

              <div className="home-blog-card">
                <h2>name</h2>
                <div className="card-top">
                  <h3>
                    Topic
                  </h3>
                  <p>date</p>
                </div>

                <p id='desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere deleniti repellendus expedita
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quasita quam dolor recusandae, deserunt tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>

                <div className="card-bottom">
                  <button id='read-full'>Read Full..</button>
                  <div className="card-react-btns">
                    <button> <FcLike /></button>
                    <button><IoMdShare /></button>
                    <button><FaComment /></button>
                  </div>
                </div>
              </div>
              <div className="home-blog-card">
                <h2>name</h2>
                <div className="card-top">
                  <h3>
                    Topic
                  </h3>
                  <p>date</p>
                </div>

                <p id='desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere deleniti repellendus expedita  dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quasiti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis.
                 
                </p>

                <div className="card-bottom">
                  <button id='read-full'>Read Full..</button>
                  <div className="card-react-btns">
                    <button> <FcLike /></button>
                    <button><IoMdShare /></button>
                    <button><FaComment /></button>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
