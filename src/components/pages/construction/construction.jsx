import React from 'react'
import './construction.css'
import CarouselCard from '../../carousel-card/carouselCard';
import con1 from '../../../assets/images/construction/con1.jpg'
import con2 from '../../../assets/images/construction/con2.jpg'
import con3 from '../../../assets/images/construction/con3.jpg'
import con4 from '../../../assets/images/construction/con4.jpg'
import con5 from '../../../assets/images/construction/con5.jpg'
import con6 from '../../../assets/images/construction/con6.jpg'
import con7 from '../../../assets/images/construction/con7.jpg'
import con8 from '../../../assets/images/construction/con8.jpg'
import con9 from '../../../assets/images/construction/con9.jpg'
import con10 from '../../../assets/images/construction/con10.jpg'
import con11 from '../../../assets/images/construction/con11.jpg'
import con12 from '../../../assets/images/construction/con12.jpg'
import con13 from '../../../assets/images/construction/con13.jpg'
import con14 from '../../../assets/images/construction/con14.jpg'
import con15 from '../../../assets/images/construction/con15.jpg'
import con16 from '../../../assets/images/construction/con16.jpg'
import con17 from '../../../assets/images/construction/con17.jpg'

const images1 = [
  { src: con1, alt: 'con1' },
  { src: con2, alt: 'con2' },
  { src: con3, alt: 'con3' }
];
const images2 = [
  { src: con4, alt: 'con4' },
];
const images3 = [
  { src: con5, alt: 'con5' },
  { src: con6, alt: 'con6' },
];
const images4 = [
  { src: con7, alt: 'con7' },
  { src: con8, alt: 'con8' },
  { src: con9, alt: 'con9' },
  { src: con10, alt: 'con10' },
];
const images5 = [
  { src: con11, alt: 'con11' },
  { src: con12, alt: 'con12' },
];
const images6 = [
  { src: con13, alt: 'con13' },
];
const images7 = [
  { src: con14, alt: 'con14' },
  { src: con15, alt: 'con15' },
  { src: con16, alt: 'con16' },
  { src: con17, alt: 'con17' },
];

export default function Construction() {
  return (
    <div className='construction-container'>
      <h2>CONSTRUCTION WORKS</h2>
      <p>Harvestwealth Nigeria Limited is a leading Engineering, 
        Procurement and Construction, EPC Contractor in Nigeria 
        with extensive experience in electricity supply 
        construction. As a contractor in the electricity business, 
        Harvestwealth Nigeria Limited has executed quality and cutting 
        edge construction projects across Nigeria for its clients.</p>
        <h2>Our Construction Portfolio</h2>
        <CarouselCard images={images1} text={'Construction of 7.5MVA Injection Substation'} />
        <CarouselCard images={images2} text={'Construction & Commissioning of  11KV Electrical Switchgear Panels'}/>
        <CarouselCard images={images3} text={' Construction of 33KV Power lines and 33kv/400v Substation'}/>
        <CarouselCard images={images4} text={'Construction of 2.5MVA indoor Substation'}/>
        <CarouselCard images={images5} text={'Construction of Pole Mounted CSP Transformers'}/>
        <CarouselCard images={images6} text={'Installation of 2500A Low  Voltage Distribution'}/>
        <h3>OFF GRID CONSTRUCTION</h3>
        <CarouselCard images={images7} text={'20kw off Grid  Solar Power System Power Residential Homes'}/>
    </div>
    
  )
}
