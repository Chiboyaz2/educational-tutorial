import React from 'react'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Hprice from './Hprice'
import Testimonal from './testimonial/Testimonal'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutCard/>
        <HAbout/>
        <Testimonal/> 
        <Hblog/> 
        <Hprice/> 
      
    </div>
  )
}

export default Home
