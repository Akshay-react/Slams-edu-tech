import React from 'react'
import HeroPage from '../sections/Home/HeroPage'
import Service from '../sections/Home/Service';
import Works from '../sections/Home/Works';
import Deliver from '../sections/Home/Deliver';
import About from '../sections/Home/About';
import Team from '../sections/Home/Team';
const Home = () => {
  return (
   <div className="">
    <HeroPage />
    <Service />
    <Works />
    <Deliver />
    <About />
    <Team/>
   </div>
  )
}

export default Home
