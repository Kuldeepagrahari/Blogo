import React from 'react'

const HomeRight = () => {
  return (
    <div className='home-right'>
      <div className="top">
        <h1>Top Blogs</h1>
        <div className="top-container">
            <div className="top-cards">
              <h3 style={{fontSize:"1.1vw", fontWeight:"bold"}}>blog name</h3>
              <p style={{fontSize:"1vw"}}>by</p>
              <h5 style={{fontSize:"1.2vw"}}>Name</h5>
             
            </div>
            <div className="top-cards">
              <h3 style={{fontSize:"1.1vw", fontWeight:"bold"}}>blog name</h3>
              <p style={{fontSize:"1vw"}}>by</p>
              <h5 style={{fontSize:"1.2vw"}}>Name</h5>
             
            </div>
            <div className="top-cards">
              <h3 style={{fontSize:"1.1vw", fontWeight:"bold"}}>blog name</h3>
              <p style={{fontSize:"1vw"}}>by</p>
              <h5 style={{fontSize:"1.2vw"}}>Name</h5>
             
            </div>
           
        </div>
      </div>
      <div className="bottom">
           <h1>Top Bloggers</h1>
           <div className="bottom-container">
            <div className="bottom-cards">
                <img src="https://i.pinimg.com/474x/b8/fe/18/b8fe185770d09f819047aebcbebf9899.jpg" alt="img" style={{width:"3vw",height:"6vh", borderRadius:"50%"}}/>
              <h3 style={{fontWeight:"bold", fontSize:"1.2vw"}}>Name</h3>
              <h4 style={{fontSize:"1vw"}}>1000 followers</h4>
            </div>
            <div className="bottom-cards">
                <img src="https://i.pinimg.com/474x/b8/fe/18/b8fe185770d09f819047aebcbebf9899.jpg" alt="img" style={{width:"3vw",height:"6vh", borderRadius:"50%"}}/>
              <h3 style={{fontWeight:"bold", fontSize:"1.2vw"}}>Name</h3>
              <h4 style={{fontSize:"1vw"}}>1000 followers</h4>
            </div>
            <div className="bottom-cards">
                <img src="https://i.pinimg.com/474x/b8/fe/18/b8fe185770d09f819047aebcbebf9899.jpg" alt="img" style={{width:"3vw",height:"6vh", borderRadius:"50%"}}/>
              <h3 style={{fontWeight:"bold", fontSize:"1.2vw"}}>Name</h3>
              <h4 style={{fontSize:"1vw"}}>1000 followers</h4>
            </div>
            
           </div>
      </div>
    </div>
  )
}

export default HomeRight
