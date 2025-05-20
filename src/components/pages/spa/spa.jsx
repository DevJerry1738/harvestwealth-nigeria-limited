import React from 'react'
import './spa.css'

import spa1 from '../../../assets/images/spa/spa1.jpg'
import spa2 from '../../../assets/images/spa/spa2.jpg'
import spa3 from '../../../assets/images/spa/spa3.jpg'
import spa4 from '../../../assets/images/spa/spa4.jpg'
import spa5 from '../../../assets/images/spa/spa5.jpg'
import spa6 from '../../../assets/images/spa/spa6.JPG'
import spa7 from '../../../assets/images/spa/spa7.JPG'
import spa8 from '../../../assets/images/spa/spa8.jpg'
import spa9 from '../../../assets/images/spa/spa9.jpg'
import spa10 from '../../../assets/images/spa/spa10.jpg'
import spa11 from '../../../assets/images/spa/spa11.jpg'
import spa12 from '../../../assets/images/spa/spa12.jpg'
import spa13 from '../../../assets/images/spa/spa13.jpg'
import spa14 from '../../../assets/images/spa/spa14.jpg'
import spa15 from '../../../assets/images/spa/spa15.jpg'
import spa16 from '../../../assets/images/spa/spa16.jpg'
import spa17 from '../../../assets/images/spa/spa17.jpg'
import spa18 from '../../../assets/images/spa/spa18.jpg'


import CarouselCard from '../../carousel-card/carouselCard';

const images1 = [
  { src: spa1, alt: 'spa1' },
  { src: spa2, alt: 'spa2' },
  { src: spa3, alt: 'spa3' }
];
const images2 = [
  { src: spa4, alt: 'spa4' },
  { src: spa5, alt: 'spa5' },
];
const images3 = [
  { src: spa6, alt: 'spa6' },
  { src: spa7, alt: 'spa7' },
  { src: spa8, alt: 'spa8' },
];
const images4 = [
  { src: spa9, alt: 'spa9' },
  { src: spa10, alt: 'spa10' },
  { src: spa11, alt: 'spa11' },
  { src: spa12, alt: 'spa12' },
  { src: spa13, alt: 'spa13' },
 
];
const images5 = [
  { src: spa14, alt: 'spa14' },
  { src: spa15, alt: 'spa15' },
 
];
const images6 = [
  { src: spa16, alt: 'spa16' },
  { src: spa17, alt: 'spa17' },
  { src: spa18, alt: 'spa18' },

 
];


export default function Spa() {
  return (
    <div className='spa-container'>
      <h2>SWITCHGEAR PANEL ASSEMBLY</h2>
      <p>
      Our Electrical Switchgear Panel Assembly factory located in Kaduna, 
      Nigeria, is well equipped with state of the art tools and equipment 
      for the assembly of various electrical switchgears including but not 
      limited to: 
      </p>
      <ol>
        <li>
        Electrical distribution Switchgear Panels up to 3200A
        </li>
        <li>AMF/ATS panels</li>
        <li>Motor Control Centers Panels (Direct On Line, Auto transformer, Star Delta and soft starters) </li>
        <li>Capacitor banks Panels</li> 
        <li>Process Control Panels</li>
      </ol>
      <h2>ELECTRICAL DISTRIBUTION SWITCHGEAR PANELS ASSEMBLED BY HARVESTWEALTH NIG LTD</h2>
      <CarouselCard
       images={images1}
       text={'Motor Control Center, MCC -Star Delta, DOL + Auto Transformer starters'}
       />
       <CarouselCard
       images={images2}
       text={'1250A AMF/ATS'}
       />
        <CarouselCard
       images={images3}
       text={'2500A Distribution panel'}
       />
       <CarouselCard
       images={images4}
       text={'Various Sizes of Low Voltage Distribution switchgear panels   '}
       />
       <CarouselCard
       images={images5}
       text={'300KVAR & 270KVAR Capacitor banks'}
       />
       <CarouselCard
       images={images6}
       text={'Chillers Process Control'}
       />
    </div>
  )
}
