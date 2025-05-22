import React from 'react'
import './partners.css'
import partner1 from '../../assets/images/partner_1.jpg'
import partner2 from '../../assets/images/partner_2.jpg'
import partner3 from '../../assets/images/partner_3.jpg'
import partner4 from '../../assets/images/partner_4.png'
import partner5 from '../../assets/images/partner_5.jpg'
import partner6 from '../../assets/images/partner_6.jpeg'
import partner7 from '../../assets/images/partner_7.png'

export default function Partners() {
  const images = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];
  return (
    <div className="partners">
      <div className="partner-text">
      <h2 className="partner-header">Our Partners</h2>
      <p>
        Authorized partners with Schneider Electric, Lucy Electric, ABB, Conco SA, ANERN Solar Systems, Chint Electric, Himel, MPI, etc.
      </p>
      </div>
      
      <div className="partner-img-container">
        <div className="partner-img">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Partner ${index + 1}`} />
          ))}
          {/* Duplicate the images for a seamless loop */}
          {images.map((image, index) => (
            <img key={`duplicate-${index}`} src={image} alt={`Partner ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
