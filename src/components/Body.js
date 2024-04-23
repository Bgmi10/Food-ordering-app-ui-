import React from 'react'
import Carousel from './Carousel'
import Toprestaurant from './Toprestaurant'
import Restaurantwithonlinefood from './Restaurantwithonlinefood'
import Mobilerescrousel from '../mobilecomponents/Mobilerescrousel'
import Toppicksforyou from '../mobilecomponents/Toppicksforyou'
import Banner from '../mobilecomponents/Banner'






const Body = () => {

  const mobile  = window.innerWidth <= 768;
  return (
  <div>
    {mobile ? 
    <>
    <Mobilerescrousel />
    <Toppicksforyou />
    <Banner />
    </>
    :
    <div>
    < Carousel />
    < Toprestaurant />
    <Restaurantwithonlinefood />

    </div>
    }

    </div>
  )
}

export default Body
