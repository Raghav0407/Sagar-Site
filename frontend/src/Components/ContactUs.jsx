import React from 'react'
import '../Styles/Contact.css'
import contact from '../Assets/contactgirl.jpg'
const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className='contact-header' style={{ textDecoration: "underline", textDecorationThickness: "5px", textUnderlineOffset: "20px", textDecorationColor: "red" }}>
                CONTACT US
            </div>
            
            <div className='img-text1'>
                <div className='img-data1'>
                    <img src={contact} alt="/" />
                </div>
                <div className='textdata1'>
                    <div className='text-head1'>
                    SAGAR STUDIO
                    </div>
                    <div className='text21' >
                    For business Inquiries : <a href="info@sagarphotoretouching.com">info@sagarphotoretouching.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs