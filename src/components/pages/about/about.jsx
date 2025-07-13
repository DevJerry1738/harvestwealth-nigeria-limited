import React from 'react';
import './about.css';
import Partners from '../../partners/partners';
import ServiceContainer from '../../serviceContainer/serviceContainer';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        {/* About Us */}
        <div className="main-text">
          <h2 className="section-title">About Us</h2>
          <p className="text">
            Harvestwealth Nig Ltd is an indigenous Engineering, Procurement, and Construction (EPC) Contractor
            established in 2002, with headquarters in Kaduna and operations across multiple states in Nigeria.
            We specialize in Electrical Engineering solutions tailored to meet the power demands of our clients.
          </p>
          <p className="text">
            In partnership with Schneider Electric and other leading equipment manufacturers, we provide
            high-quality Electrical Designs, Switchgear Panel Assemblies, and Power Construction services,
            covering both on-grid and off-grid energy systems.
          </p>
        </div>

        {/* Mission and vision */}
        <div className="mission-vision">

          {/* Vision */}
          <div className="container">
            <h3 className="sub-title">Our Vision</h3>
            <p className="text">
              To be a strong, dependable, and one of the best energy service providers in Nigeria.
            </p>
          </div>


          {/* Mission */}
          <div className="container">
            <h3 className="sub-title">Our Mission</h3>
            <p className="text">
              To exceed customer expectations, deliver value to stakeholders, and provide a supportive
              environment where our workforce can realize their full potential.
            </p>
          </div>


        </div>


        {/* Services */}
        {/* <h3 className="sub-title">Our Services</h3>
        <ul className="service-list">
          <li>Customized electrical design and consulting.</li>
          <li>Reliable and safe electrical installations.</li>
          <li>Original Equipment Manufacturer (OEM) certified products.</li>
          <li>Solutions for residential, industrial, and infrastructure projects.</li>
        </ul> */}

        <ServiceContainer/>

        {/* Partners */}
        <Partners />
      </div>
    </section>
  );
};

export default AboutUs;
