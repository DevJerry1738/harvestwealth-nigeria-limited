import React from 'react';
import './spa.css';

import spa1 from '../../../assets/images/spa/spa1.jpg';
import spa2 from '../../../assets/images/spa/spa2.jpg';
import spa3 from '../../../assets/images/spa/spa3.jpg';
import spa4 from '../../../assets/images/spa/spa4.jpg';
import spa5 from '../../../assets/images/spa/spa5.jpg';
import spa6 from '../../../assets/images/spa/spa6.JPG';
import spa7 from '../../../assets/images/spa/spa7.JPG';
import spa8 from '../../../assets/images/spa/spa8.jpg';
import spa9 from '../../../assets/images/spa/spa9.jpg';
import spa10 from '../../../assets/images/spa/spa10.jpg';
import spa11 from '../../../assets/images/spa/spa11.jpg';
import spa12 from '../../../assets/images/spa/spa12.jpg';
import spa13 from '../../../assets/images/spa/spa13.jpg';
import spa14 from '../../../assets/images/spa/spa14.jpg';
import spa15 from '../../../assets/images/spa/spa15.jpg';
import spa16 from '../../../assets/images/spa/spa16.jpg';
import spa17 from '../../../assets/images/spa/spa17.jpg';
import spa18 from '../../../assets/images/spa/spa18.jpg';

import CarouselCard from '../../carousel-card/carouselCard';

const galleryData = [
  {
    images: [spa1, spa2, spa3],
    text: 'Motor Control Center (MCC): Star Delta, DOL & Auto Transformer Starters'
  },
  {
    images: [spa4, spa5],
    text: '1250A AMF / ATS Panel'
  },
  {
    images: [spa6, spa7, spa8],
    text: '2500A Distribution Panel'
  },
  {
    images: [spa9, spa10, spa11, spa12, spa13],
    text: 'Low Voltage Distribution Switchgear Panels (Various Sizes)'
  },
  {
    images: [spa14, spa15],
    text: '300KVAR & 270KVAR Capacitor Banks'
  },
  {
    images: [spa16, spa17, spa18],
    text: 'Chillers Process Control Panels'
  }
];

export default function Spa() {
  const spaFeatures = [
    'Electrical Distribution Switchgear Panels up to 3200A',
    'AMF / ATS Panels',
    'Motor Control Centers (DOL, Auto Transformer, Star Delta, Soft Starters)',
    'Capacitor Banks Panels',
    'Process Control Panels',
  ];
  return (
    <section className='spa-container'>
      <header className="spa-header">
        <h1>Switchgear Panel Assembly</h1>
        <p>
          Our Electrical Switchgear Panel Assembly factory located in Kaduna, Nigeria,
          is equipped with state-of-the-art tools for assembling a wide range of electrical switchgears, including:
        </p>
      </header>
      
      <div className="spa-features-container">
        {spaFeatures.map((feature, index) => (
          <div className="spa-feature-card" key={index}>
            <p>{feature}</p>
          </div>
        ))}
      </div>

      <h2 className="spa-subheading">Electrical Distribution Switchgear Panels Assembled by Harvestwealth Nig Ltd</h2>

      <div className="spa-gallery">
        {galleryData.map((item, index) => (
          <CarouselCard
            key={index}
            images={item.images.map((src, i) => ({ src, alt: `spa-${index}-${i}` }))}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
}
