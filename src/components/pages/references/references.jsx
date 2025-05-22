import React from 'react';
import './references.css';
// import customer1 from '../../../assets/images/customers/customer1.jpg'
import customer2 from '../../../assets/images/customers/customer2.PNG'
import customer3 from '../../../assets/images/customers/customer3.PNG'
import customer4 from '../../../assets/images/customers/customer4.PNG'
import customer5 from '../../../assets/images/customers/customer5.PNG'
// import customer6 from '../../../assets/images/customers/customer6.jpg'
// import customer7 from '../../../assets/images/customers/customer7.jpg'

export default function References() {
  const customers = [
   
    { name: 'Federal Ministry of Women Affairs New HQ' , src: customer2 ,text:'powered by Harvestwealth Nig Ltd Switchgears'}, 
    { name: 'CBN Dutse, Jigawa State ',  src: customer3, text:'powered by Harvestwealth Nig Ltd Switchgears'},
    { name: 'The Wells Carlton Hotel, Asokoro, Abuja',  src: customer4 ,text:'powered by Harvestwealth Nig Ltd Switchgears'},
    { name: '7.5MVA Electrical Power Infrastructure at Barracks road, Jimeta, Yola', src: customer5,text:'built by Harvestwealth Nig Ltd '},


  ];

  return (
    <div className='references-container'>
      <h2>Our Customer Base</h2>
      <div className='cards-container'>
        {customers.map((customer, index) => (
          <div key={index} className='card'>
            <img src={customer.src} alt="img" />
            <h3>{customer.name}</h3>
            <p>{customer.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
}