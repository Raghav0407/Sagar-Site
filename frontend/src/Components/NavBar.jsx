import React from 'react';
import logo from '../Images/logo.png'
import homeIcon from "../Images/home_icon.png"
import "../Styles/NavBar.css"
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="row">
                <div className="logo">
                    <img alt="Company Logo" src={logo} />
                </div>
                <div className="navbar-mid">
                    <div className="cssmenu">
                        <ul>
                            <li>
                                <Link to = '/'><span><img alt="Home Icon" src={homeIcon} /></span></Link>
                            </li>
                            <Link to='/aboutus'><li><span>About Us</span></li></Link>
                            <Link to='/portfolio'><li><span>Portfolio</span></li></Link>
                            <Link to='/services'><li><span>Services</span></li></Link>
                            <Link to='/enquiry'><li><span>Enquiry</span></li></Link>
                            <Link to='/contactus'><li className="last"><span>Contact Us</span></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="header_btn">Our Turnaround Time 24 Hours</div>
            </div>
        </div>
    );
}

export default NavBar;
