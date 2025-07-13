import React from 'react'
import './ctaButton.css'
import { Link } from 'react-router-dom'

export default function CtaButton({ text, to, variant= 'primary' }) {
  return (

    <Link to={to} className='cta-button-link'>
      <button className={`cta-button cta-button--${variant}`}> {text} </button>
    </Link>




  )
}
