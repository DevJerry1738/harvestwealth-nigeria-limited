import React from 'react'
import './ctaButton.css'
import { Link } from 'react-router-dom'

export default function CtaButton() {
  return (
      <div className="button">
 <Link to='/contact' className='cta-button-link'>
      <button className='cta-button'> Contact Us </button>
      </Link>
      </div>
     
        
    
  )
}
