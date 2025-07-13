import React from 'react'
import './ctaContainer.css';
import CtaButton from '../../components/cta-button/ctaButton';
import home_1 from '../../assets/images/home_1.jpg';
import home_2 from '../../assets/images/home_2.jpg';
import home_3 from '../../assets/images/home_3.jpg';
import home_4 from '../../assets/images/home_4.jpg';

export default function CtaContainer() {
    const images = [
    home_1,
    home_2,
    home_3,
    home_4,
  ];
  return (
    <div className="cta-container">
        <div className="cta">
          <div className="welcome-text">
            <div className="text">
              <h1>Innovative Electrical Solutions for a Sustainable Future</h1>
              <p>We specialize in Electrical Designs, Electrical Switchgear Panels assembly, and Electrical Power Construction (On and Off Grid).</p>
            </div>
            <div className="cta-button-container">
              <CtaButton text={'About Us'}to={'/about'} variant='primary'/>
              <CtaButton text={'Contact Us'} to={'/contact'} variant='secondary'/>
            </div>
            
          </div>
        </div>
        <div className="image-row">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
  )
}
