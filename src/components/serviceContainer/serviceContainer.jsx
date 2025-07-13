import React from 'react'
import './serviceContainer.css';
import vector_1 from '../../assets/images/Vector_1.jpg'
import vector_2 from '../../assets/images/Vector_2.jpeg';
import vector_3 from '../../assets/images/Vector_3.jpg';
import vector_4 from '../../assets/images/Vector_4.JPG';
import { Link } from 'react-router-dom';

export default function ServiceContainer({}) {
    const services = [
  {
    title: 'Engineering Solutions',
    description: 'We provide custom cutting-edge electrical engineering solutions tailored for our customers specific applications.',
    image: vector_1,
    to:'/engineering'
  },
  {
    title: 'Procurement Services',
    description: 'We supply top-grade electrical equipment from trusted global partners, ensuring quality and durability.',
    image: vector_2,
    to:'/procurement'
  },
  {
    title: 'Construction Works',
    description: 'From substation installations to complete power systems, we deliver reliable electrical construction.',
    image: vector_3,
    to: "/construction"
  },
  {
    title: 'Switchgear Panel Assembly',
    description: 'We build modern switchgear panels for residential, commercial, and industrial applications.',
    image: vector_4,
    to: "/spa"
  },
];

  return (
    <div className="our-services">
  <h2>Our Services</h2>
  <div className="modern-services">
    {services.map((service, index) => (
      <Link to={service.to} className='link'>
      <div key={index} className="modern-service-card">
        <img src={service.image} alt={service.title} />
        <div className="modern-service-text">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
      </Link>
    ))}
  </div>
</div>

  )
}
