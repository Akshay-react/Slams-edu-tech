import React from 'react'
import HeroPage from '../sections/Home/HeroPage'
import Service from '../sections/Home/Service';
import Works from '../sections/Home/Works';
import Deliver from '../sections/Home/Deliver';
import About from '../sections/Home/About';
const Home = () => {
  return (
   <div className="px-">
    <HeroPage />
    <Service />
    <Works />
    <Deliver />
    <About />
   </div>
  )
}

export default Home
