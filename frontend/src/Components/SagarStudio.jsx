import React from 'react';
import '../Styles/SagarStudio.css';
import about_img1 from "../Images/about_img1.jpg"
import about_img2 from "../Images/about_img2.jpg"
import about_img3 from "../Images/about_img3.jpg"
import about_img4 from "../Images/about_img4.jpg"
import about_img5 from "../Images/about_img5.jpg"

function SagarStudio() {
    return (
        <div className="sagar-studio-container">
            <div className="sagar-studio-center">
                <div className="sagar-studio-content">
                    <h2 className="sagar-studio-title">SAGAR STUDIO</h2>
                    <div className="sagar-studio-description">
                        <p>
                            State of Sagar art design studios based at Gandhinagar Ahmedabad India. It is studio with highly safe and secure work
                            place with natural day lights, high contrasts; with hi end work stations to support their graphic artist to deliver their best.
                        </p>
                        <p>
                            Sagar Studio has back office service provider to many photo processing website to cater to consumer photo enhancement and
                            photo restoration need at large.
                        </p>
                        <p>
                            Sagar Studio is launched with an objective to provide fast, easy and convenient solution to provide back office image processing
                            service to professional photographers.
                        </p>
                        <p>
                            With rich experience of my and our graphic artist, we have customer from across the globe.
                        </p>
                        <span className="read-more">Read More</span>
                    </div>
                </div>

                <div className="sagar-studio-images">
                    <div className="left-sec">
                        <div className="image-block">
                            <img alt="image_1" src={about_img1} /><span>PRODUCT RETOUCHING</span>
                        </div>
                        <div className="image-block">
                            <img alt="image_2" src={about_img2} /><span>REAL ESTATE PHOTOGRAPHY</span>
                        </div>
                    </div>
                    <div className="mid-sec">
                        <div className="image-block">
                            <img alt="image_3" src={about_img3} />
                        </div>
                    </div>
                    <div className="right-sec">
                        <div className="image-block">
                            <img className = "image-mid" alt="image_4" src={about_img4} /><span>FASHION PHOTOGRAPHY</span>
                        </div>
                        <div className="image-block">
                            <img alt="image_5" src={about_img5} /><span>IMAGE MANIPULATION</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SagarStudio;
