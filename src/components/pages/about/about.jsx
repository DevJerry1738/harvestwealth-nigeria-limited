import React from 'react';
import Partners from '../../partners/partners';
import './about.css';

export default function About() {
  return (
    <div className='about-container'>
      <h2>About Us</h2>
      <p>
        Harvestwealth Nig Ltd is an indigenous Engineering, Procurement and Construction (EPC) Contractor incorporated in 2002 with its head office in Kaduna and operational activities in several states across Nigeria. We are specialists in Electrical Engineering solutions that meets the power needs of our clients.
      </p>
      <p>
        Our firm, in partnership with Schneider Electric and other major electrical equipment manufacturers, has been providing quality Electrical Designs, Electrical Switchgear Panels Assembly, and Electrical Power Construction (On and Off grid Power solutions) for our clients.
      </p>
      <h3>Our Vision</h3>
      <p>
        We are guided by our vision of “aspiring to be a strong, dependable and one of the best energy service providers in Nigeria”.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to surpass our customer needs, give value to our stakeholders and provide an enabling environment for our workforce to realize their potentials.
      </p>
      <h3>Features of our Services</h3>
      <ul className='features-list'>
        <li>We have a comprehensive range of electrical solutions that finds applications in building, industrial, and infrastructural sectors that meets the energy needs of our clients.</li>
        <li>Customized electrical designs.</li>
        <li>Our products and services are reliable and safe.</li>
        <li>Products are sourced from Original Equipment Manufacturers (OEMs).</li>
      </ul>
      <Partners />
    </div>
  );
}