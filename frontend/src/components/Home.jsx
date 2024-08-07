import React from 'react'
import "./Home.css"
import { FcLike } from "react-icons/fc";
import { IoMdShare } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import HomeRight from './HomeRight.jsx';
const Home = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere deleniti repellendus expedita Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis...
          </p>

          <div className="card-bottom">
            <button id='read-full'>Read Full..</button>
            <div className="card-react-btns">
            <button> <FcLike/></button>
            <button><IoMdShare/></button>
            <button><FaComment/></button>
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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quasita quam dolor recusandae, deserunt tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis.voluptas quas eos! Quo quas, repellendus illo...
          </p>

          <div className="card-bottom">
            <button id='read-full'>Read Full..</button>
            <div className="card-react-btns">
            <button> <FcLike/></button>
            <button><IoMdShare/></button>
            <button><FaComment/></button>
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
             Loctetur adipisicing elit. Pariatur, quia sed maiores deleniti commodi expedita quam dolor recusandae, deserunt tempore voluptas quas eos! Quo quas, repellendus illo dignissimos libero blanditiis...
          </p>

          <div className="card-bottom">
            <button id='read-full'>Read Full..</button>
            <div className="card-react-btns">
            <button> <FcLike/></button>
            <button><IoMdShare/></button>
            <button><FaComment/></button>
            </div>
          </div>
          </div>
         
      
      
      </div>
      <HomeRight/>
    </div>
  )
}

export default Home
