import React from 'react'
import './procurement.css'
import pro1 from '../../../assets/images/procurement/pro1.jpeg'
import pro2 from '../../../assets/images/procurement/pro2.jpg'
import pro3 from '../../../assets/images/procurement/pro3.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Procurement() {
  return (
    <div className='procurement-container'>
      <h2>Procurement Services</h2>
      <p>
        As a leading EPC Contractor and in partnership with its partners,
        Harvestwealth Nigeria Limited has a large stock of various electricity
        supply products and equipment. We have extensive experience in equipment procurement.
        As an interphase between end users of electricity products and equipment in Nigeria,
        Harvestwealth Nigeria Limited has procured various ranges of electricity equipment for its clients across Nigeria.
      </p>
      <div className='gallery'>
        {/* <div className='gallery-item'>
          <img src={pro1} alt='Planning' />
          
        </div>
        <div className='gallery-item'>
          <img src={pro2} alt='Design' />
          
        </div>
        <div className='gallery-item'>
          <img src={pro3} alt='Team of COREN certified engineers' />
          
        </div> */}
        <div className="gallery">
          <Carousel className='carousel' showThumbs={false} autoPlay infiniteLoop>
            <div>
              <img src={pro1} alt='pro1' />
            </div>
            <div>
              <img src={pro2} alt='pro2' />
            </div>
            <div>
              <img src={pro3} alt='pro3' />
            </div>
          </Carousel>
        </div>

      </div>

    </div>
  )
}
