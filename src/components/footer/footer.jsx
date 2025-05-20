import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='footer'>
      <div className="company-details">
        <h3>HARVESTWEALTH NIGERIA LIMITED</h3>
        <p>© 2025. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <div className="links">
        <Link to='/'>Home</Link><br />
        <Link to='/about'>About Us</Link><br />
        <Link to='/contact'>Contact Us</Link>
        </div>
        
        </div>
      
      <div className="footer-social"> 
        <h3>Follow Us</h3>
        <div className="socials">
          <a href="https://www.facebook.com/harvestwealthng" target="_blank" rel="noreferrer">
          <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/harvestwealthng" target="_blank" rel="noreferrer">
          <LuInstagram />
          </a>
          <a href="https://www.linkedin.com/company/harvestwealthng" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.twitter.com/harvestwealthng" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        </div>
    </div>
  )
}
