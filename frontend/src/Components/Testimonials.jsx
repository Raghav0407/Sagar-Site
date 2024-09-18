import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import testi from '../Assets/testi.png'
import '../Styles/Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Testimonials = () => {
    return (
        <div className='testi-container'>
            <div className='text-carousel'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item interval={3000}>
                        <img src={testi} alt="first" style={{ width: "100%", height: "50vh" }} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img src={testi} alt="second" style={{ width: "100%", height: "50vh" }} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='testi-data'>
                <div className='data1'>
                    <div className='datanum'>500+</div>
                    <div className='datatext'>Restoration and Images Manipulation</div>
                </div>
                <div className='data2'>
                    <div className='datanum'>700+</div>
                    <div className='datatext'>Product Retouching</div>
                </div>
                <div className='data3'>
                    <div className='datanum'>1000+</div>
                    <div className='datatext'>Real Estate Photography</div>
                </div>
                <div className='data4'>
                    <div className='datanum'>300+</div>
                    <div className='datatext'>Model/ Fashion Photography</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials