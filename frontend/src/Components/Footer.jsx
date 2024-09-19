import React from 'react';
import '../Styles/Footer.css';
import mail_image from "../Images/mail_image.webp"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-contact-container">
                <h2 className="contact-heading">CONTACT US</h2>
                <p className="sub-heading">is Time to Do it</p>
                <p className="description">
                    Do you have any idea in mind? Contact us, we will give you the answer you expect.
                </p>
                <div className="bottom">
                    <form className="contact-form">
                        <div className="left">
                            <h3 className='send-message'>Send a Message</h3>
                            <div className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input-field" />
                                <input type="email" name="email" placeholder="Email Id" className="input-field" />
                                <select className="input-field">
                                    <option value="India">India</option>
                                </select>
                            </div>
                        </div>
                        <div className="para">
                            <p>Write down the captcha code in text box</p>
                        </div>
                        <div className="captcha">
                            <input type="text" className="captcha-input" placeholder='Write here' />
                            <span className="captcha-code">6984</span>
                        </div>

                        <textarea name="message" placeholder="Your Message" className="message-box"></textarea>

                        <button type="submit" className="round-button">
                            <img src={mail_image} alt="Send" className="button-icon" />
                        </button>
                    </form>

                    <div className="footer">
                        <p>Fax: info@sagarphotoretouching.com</p>
                        <p>Web: www.sagarphotoretouching.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright 2015 Sagar Studio. Right Reserved</p>
                <p>Design developed by : <a href='https://www.hwplindia.com/'>Horizzon Infotech</a></p>
            </div>
        </div>
    );
};

export default Footer;
