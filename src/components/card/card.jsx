import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export default function Card({ image, title,path }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card-image' />
      <h3 className='card-title'>{title}</h3>
      <Link to={path}>
      <button className='card-button'>View Details</button>
      </Link>
      
    </div>
  );
}