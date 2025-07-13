import React from 'react'
import './epc.css'
import vector_1 from '../../../assets/images/Vector_1.png';
import vector_2 from '../../../assets/images/Vector_2.png';
import vector_3 from '../../../assets/images/Vector_3.png';
import { Link } from 'react-router-dom';

export default function Epc() {
  const services = [
    { image: vector_1, text: 'Engineering Solutions', to: '/engineering' },
    { image: vector_2, text: 'Procurement Services', to: '/procurement' },
    { image: vector_3, text: 'Construction Works', to: '/construction' },

  ];
  return (
    <div className='epc'>
      <div className="epc-text">
        <h2>Engineering, Procurement and Construction Services</h2>
        <p>At Harvestwealth Nigeria Limited, we offer high quality Engineering Solutions, Procurement services and Construction works. Our team consists of experienced professionals working together to provide expert services that meets our clients needs.</p>
      </div>

      <div className="card-section">
        {services.map((service, index) => (
          <Link to={service.to} className='card-link'>
            <div key={index} className="service-card">
              <img src={service.image} alt={service.text} />
              <p>{service.text}</p>
            </div>
          </Link>

        ))}
      </div>
    </div>
  )
}
