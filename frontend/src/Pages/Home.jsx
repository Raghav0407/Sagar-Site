import React from 'react'
import CarouselHome from "../Components/CarouselHome"
import SagarStudio from "../Components/SagarStudio"
import OurPortfolio from "../Components/OurPortfolio"
import Testimonials from "../Components/Testimonials"

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