import React, { useState } from 'react';
import './contact.css';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_favvzrq', 'template_tz4mw5i', e.target, 'TLXn4ZdVecoCHri_u')
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    toast.success('Email sent successfully!', {
                        position: 'top-center',
                        autoClose: 3000, // Auto close after 3 seconds
                    });
                },
                (error) => {
                    console.log('Failed to send email.', error.text);
                    toast.error('Failed to send email. Please try again.', {
                        position: 'top-center',
                        autoClose: 3000,
                    });
                }
            );
    
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='contact-container'>
            {/* Toast Container */}
            <ToastContainer />

            <div className="contact-area">
                <div className='contact-info'>
                    <h2>Contact Us</h2>
                    <p>Company Address: <br />NO 26 WhiteHouse Street,
                        Off Kachia Road, <br />
                        Behind Northern Noddles Factory, <br />
                        Nissi Village,<br /> Kaduna State, Nigeria
                    </p>
                    <p>Phone Numbers: +234 802 315 1671</p>
                    <p>Email: enquiry@harvestwealthltd.com</p>
                    <div className='socials'>
                        <a href="https://www.facebook.com/harvestwealthng" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/harvestwealthng" target="_blank" rel="noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-header'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-header'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-header form-header-message'>
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            className='message'
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}