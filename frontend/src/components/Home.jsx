import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="home-blog-card">
          <div className="card-top">
            <h2>name</h2> 
            <p>date</p>
          </div>
          <h3>
            Topic
          </h3>
          <p>
            desc
          </p>

          <div className="card-bottom">
            <button>Read More..</button>
            <button>Like</button>
            <button>Share</button>
            <button>Comment</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home
