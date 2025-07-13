import React from 'react'
import './home.css'
import Partners from '../../partners/partners'
import { Link } from 'react-router-dom';
import CtaContainer from '../../ctaContainer/ctaContainer';
import ServiceContainer from '../../serviceContainer/serviceContainer';


export default function Home() {
  // const services = [
  //   { image: vector_1, text: 'Engineering Solutions', to: '/engineering' },
  //   { image: vector_2, text: 'Procurement Services', to: '/procurement' },
  //   { image: vector_3, text: 'Construction Works', to: '/construction' },
  //   { image: vector_4, text: 'Switchgear Panel Assembly', to: '/spa' },
  // ];

  

  return (
    <div className='home'>
      
      <CtaContainer/>

      {/* <div className='our-services'>
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
      </div> */}

      <ServiceContainer/>

      <Partners />
    </div>
  );
}