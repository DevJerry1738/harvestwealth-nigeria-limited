import React from 'react'
import './epc.css'
import vector_1 from '../../../assets/images/Vector_1.png';
import vector_2 from '../../../assets/images/Vector_2.png';
import vector_3 from '../../../assets/images/Vector_3.png';
import Card from '../../card/card'
import eng1 from '../../../assets/images/epc/eng1.jpg'
import pro1 from '../../../assets/images/epc/pro1.jpeg'
import con1 from '../../../assets/images/epc/con1.jpg'
import { Link } from 'react-router-dom';

export default function Epc() {
    const services = [
        { image: vector_1, text: 'Engineering Solutions' , to:'/engineering'},
        { image: vector_2, text: 'Procurement Services' ,to:'/procurement'},
        { image: vector_3, text: 'Construction Works',to:'/construction' },
       
      ];
    return (
        <div className='epc'>
            <h2>ENGINEERING, PROCUREMENT AND CONSTRUCTION SERVICES</h2>
            <p>At Harvestwealt Nigeria Limited, we offer high quality Engineering Solutions, Procurement services and Construction works. Our team consists of experienced professionals working together to provide expert services that meets our clients needs.</p>
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
