import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <>
    <div className='homepage'>
        
        <div className="hero">
        
        <h2 id="text">Become an Expert in the <br /> field of<span> Data Science <br />with 6 courses</span></h2>
        <p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p>

      <div className='icons'>
        <button className='one'>
        <img className='image' src="./award_star.png" alt="award_star" />
        Personal Mentorhip
        </button>
        <button className='one'>
        <img  className="image"src="./award_star.png" alt="award_star" />
        Internship Assistance
        </button>
        <button className='one' >
        <img  className="image"src="./award_star.png" alt="award_star" />
        Industry Certified Courses
        </button>
      </div>
      <div id="Enroll">
          <button id="now">Enroll Now <img src="./fi-br-paper-plane.png" alt="plane" /></button>
          <p>Know More <img id="question" src="./fi-br-interrogation.png" alt="" /></p>
      </div>  
      <div className='flexCenter '>
        <div className='flexColCenter '>
            <span className='primary'>24</span>
            <span className='secondaryText'>Courses</span>
        </div>
        <div className='flexColCenter '>
            <span className='primary'>30K +</span>
            <span className='secondaryText'> Learners</span>
        </div>
        <div className='flexColCenter '>
            <span className='primary'>
                100K +
            </span>
            <span className='secondaryText'>Doubts Solved</span>
        </div>
        <div className='flexColCenter '>
            <span className='primary'>10k +</span>
            <span className='secondaryText'>Student Projects</span>
        </div>
      </div>
      </div>
      

     
    </div>
    </>
  )
}

export default Home