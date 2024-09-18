import React from 'react';
import logo from '../Images/logo.png'
import homeIcon from "../Images/home_icon.png"
import "../Styles/NavBar.css"

function NavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="logo">
                    <img alt="Company Logo" src={logo} />
                </div>
                <div className="navbar-mid">
                    <div className="cssmenu">
                        <ul>
                            <li>
                                <span><img alt="Home Icon" src={homeIcon} /></span>
                            </li>
                            <li><span>About Us</span></li>
                            <li><span>Portfolio</span></li>
                            <li><span>Services</span></li>
                            <li><span>Enquiry</span></li>
                            <li className="last"><span>Contact Us</span></li>
                        </ul>
                    </div>
                </div>
                <div className="header_btn">Our Turnaround Time 24 Hours</div>
            </div>
        </div>
    );
}

export default NavBar;
