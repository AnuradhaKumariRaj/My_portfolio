import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json'
import Typed from 'typed.js';
/* installes typed js npm install typed.js and import it for moving text run this 
command if found error- npm install -D babel-loader @babel/core @babel/preset-env*/


export const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings: ["Welcome to my profile", "My Name is Anuradha Kumari",
        "I'm full stack developer", "Backend Developer(Python)"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="container home" id = "home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">

          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">
            Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgProfile}`} alt="hero" />
          </div>
        </div>
      </div>
    </>

  )
}
export default Home