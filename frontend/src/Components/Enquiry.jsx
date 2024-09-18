import React from 'react'
import "../Styles/Enquiry.css"

function Enquiry() {
    return (
        <div className="container">
            <div className="Enquiry-heading">
                <h1 className='enquiry'>ENQUIRY</h1>
            </div>
            <div className="enquiry-contain">
                <div className="enquiry-mid">
                    <h2 className="enquiry-span"><span className='span-left'>GET IN</span><span className='span-right'>TOUCH</span></h2>
                </div>
                <div className="enquiry-bottom">
                    <div className="left">
                        <p>For business Inquiries :</p>
                        <p><a href="mailto:info@sagarphotoretouching.com">info@sagarphotoretouching.com</a></p>
                    </div>
                    <div className="right">
                        <form className="enquiry-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                                <input
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                />
                                <select
                                    name="country"
                                >
                                    <option value="India">India</option>
                                    {/* Add other countries as options here */}
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="captcha"
                                    placeholder="Write down the captcha code in text box"
                                />
                                <button className="captcha-button" disabled>{Math.floor(Math.random() * 9000) + 1000}</button>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message / Inquiry"
                                />
                            </div>
                            <button type="submit" className="submit-button">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enquiry