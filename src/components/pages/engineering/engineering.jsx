import React from 'react';
import './engineering.css';
import eng1 from '../../../assets/images/engineering/eng1.jpg';
import eng2 from '../../../assets/images/engineering/eng2.jpg';
import eng3 from '../../../assets/images/engineering/eng3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Engineering() {
  return (
    <div className='engineering-container'>
      <h2>Engineering Solutions</h2>
      <p>
        Harvestwealth Nigeria Limited provides customized electrical designs that meet customers' specific applications. We provide tailor-made electrical designs for customer’s building, industrial, commercial, and infrastructural needs.
      </p>
      {/* <div className='gallery'>
        <div className='gallery-item'>
          <img src={eng1} alt='Planning' />
          
        </div>
        <div className='gallery-item'>
          <img src={eng2} alt='Design' />
          
        </div>
        <div className='gallery-item'>
          <img src={eng3} alt='Team of COREN certified engineers' />
          
        </div>
      </div> */}
      <Carousel className='carousel' showThumbs={false} autoPlay infiniteLoop>
            <div>
            <img src={eng1} alt='eng1' />
            </div>
            <div>
            <img src={eng2} alt='eng2' />
            </div>
            <div>
            <img src={eng3} alt='eng3' />
            </div>
          </Carousel>
      <p>Planning and Design team of COREN certified engineers</p>
    </div>

  );
}