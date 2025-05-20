import React, {useState} from 'react'
import './carouselCard.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


export default function CarouselCard({ text, images }) {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  const toggleCarouselVisibility = () => {
    setIsCarouselVisible(!isCarouselVisible);
  };
  return (
    <div className='carousel-card'>
    <p>{text}</p>
    <div className='dropdown-icon' onClick={toggleCarouselVisibility}>
      {isCarouselVisible ? <FaChevronUp /> : <FaChevronDown />}
    </div>
    {isCarouselVisible && (
      <div className='gallery'>
        <Carousel className='carousel' showThumbs={false} autoPlay infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    )}
  </div>
  )
}
