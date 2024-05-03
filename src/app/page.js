import Growperfomance from '@/components/Growperfomance'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
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
    </>
  )
}

export default Page