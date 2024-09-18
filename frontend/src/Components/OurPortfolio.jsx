import React from 'react'
import '../Styles/OurPortfolio.css'
import Carousel from 'react-bootstrap/Carousel';
import photo from '../Assets/photo.jpg'
import photo2 from '../Assets/photo2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
const OurPortfolio = () => {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-header' style={{textDecoration:"underline",textDecorationThickness:"5px",textUnderlineOffset:"20px",textDecorationColor:"red"}}>
      Our Portifolio
      </div>
      <div className='portfolio-carousel'>
        <Carousel data-bs-theme="dark" >
          <Carousel.Item interval={3000} style={{ display: "flex", flexDirection: "row", width: "60%", marginLeft: "20vw" }}>
            <img src={photo} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000} style={{ display: "flex", flexDirection: "row", width: "60%", marginLeft: "20vw" }}>
            <img src={photo2} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo2} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo2} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <img src={photo2} alt="first" style={{ width: "25%", height: "30vh", border: "4px solid grey", margin: "5px" }} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default OurPortfolio