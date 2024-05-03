import Growperfomance from '@/components/Growperfomance'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Productvideo from '@/components/Productvideo'
import ReviewSlider from '@/components/Reviewslider'

import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Growperfomance/>
      <Productvideo/>
      <ReviewSlider/>
    </>
  )
}

export default page