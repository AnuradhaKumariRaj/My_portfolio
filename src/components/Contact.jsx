import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up" data-aos-duration="1000">
          {
          /* for icons first installed the icon package "npm i react-icons" and then serch for the 
          icons click the icon that you want to implement then import above */}
          <a href='https://www.instagram.com/' target='_blank' className="items"> <FaInstagram className="icons" /> </a>
          <a href='https://www.facebook.com' target='_blank' className="items"> <CiFacebook className="icons" /> </a>
          <a href='https://www.linkedin.com' target='_blank' className="items"> <CiLinkedin className="icons" /> </a>
          <a href='https://www.google.com' target='_blank' className="items"> <FaSquareTwitter className="icons" /> </a>
          <a href='https://www.github.com' target='_blank' className="items"> <FaSquareGithub className="icons" /> </a>
          <a href='mailto:anu.coding.classes@gmail.com' target='_blank' className="items"> <SiGmail className="icons" /> </a>
        </div>
      </div>
    </>
  )
}
export default Contact