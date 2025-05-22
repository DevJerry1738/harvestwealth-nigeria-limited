import React from 'react'
import './home.css'
import home_1 from '../../../assets/images/home_1.jpg';
import home_2 from '../../../assets/images/home_2.jpg';
import home_3 from '../../../assets/images/home_3.jpg';
import home_4 from '../../../assets/images/home_4.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CtaButton from '../../cta-button/ctaButton'
import Partners from '../../partners/partners'
import { Link } from 'react-router-dom';

import vector_1 from '../../../assets/images/Vector_1.png';
import vector_2 from '../../../assets/images/Vector_2.png';
import vector_3 from '../../../assets/images/Vector_3.png';
import vector_4 from '../../../assets/images/Vector_4.png';


export default function Home() {
  const services = [
    { image: vector_1, text: 'Engineering Solutions', to: '/engineering' },
    { image: vector_2, text: 'Procurement Services', to: '/procurement' },
    { image: vector_3, text: 'Construction Works', to: '/construction' },
    { image: vector_4, text: 'Switchgear Panel Assembly', to: '/spa' },
  ];

  const images = [
    home_1,
    home_2,
    home_3,
    home_4,
  ];

  return (
    <div className='home'>
      <div className="cta-container">
        <div className="cta">
          <div className="welcome-text">
            <div className="text">
              <h1>Innovative Electrical Solutions for a Sustainable Future</h1>
              <p>We specialize in Electrical Designs, Electrical Switchgear Panels assembly, and Electrical Power Construction (On and Off Grid).</p>
            </div>
            <div className="cta-button-container">
              <CtaButton />
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

      <div className='our-services'>
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <Link to={service.to} className='card-link' key={index}>
              <div className="service-card">
                <img src={service.image} alt={service.text} />
                <p>{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Partners />
    </div>
  );
}