import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Frequently from '@/components/Frequently'
import Growperfomance from '@/components/Growperfomance'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import JournyInfo from '@/components/JournyInfo'
import PricingPackages from '@/components/PricingPackages'
import Productvideo from '@/components/Productvideo'
import ReviewSlider from '@/components/ReviewSlider'

import React from 'react'

const Page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Growperfomance/>
      <Productvideo/>
      <PricingPackages/>
      <Frequently/>
      <Blog/>
      <JournyInfo/>
      <Footer/>
    </>
  )
}

export default Page