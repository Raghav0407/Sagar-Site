import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import photo from '../Assets/photo.jpg'
import logo from '../Assets/sagar-slide.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/CarouselHome.css';

const CarouselHome = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img src={photo} alt="first" style={{width:"100%",height:"70vh"}}/>
        <Carousel.Caption>
        <img src={logo} className='logo_animation'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={photo} alt="second" style={{width:"100%",height:"70vh"}}/>
        <Carousel.Caption>
        <img src={logo} className='logo_animation'/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img src={photo} alt="third" style={{width:"100%",height:"70vh"}}/>
        <Carousel.Caption>
        <img src={logo} className='logo_animation'/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselHome