import React from 'react'
import NavBar from '../Components/NavBar'
import CarouselHome from "../Components/CarouselHome"
import SagarStudio from "../Components/SagarStudio"
import OurPortfolio from "../Components/OurPortfolio"
import Testimonials from "../Components/Testimonials"
import Footer from "../Components/Footer"

function Home() {
  return (
    <div>
        <CarouselHome />
        <SagarStudio />
        <OurPortfolio />
        <Testimonials />
    </div>
  )
}

export default Home