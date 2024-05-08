import Header from '@/components/Header'
import HeroSub from '@/components/HeroSub'
import React from 'react'

const page = () => {
  return (
    <>
        <Header/>
        <HeroSub 
          title="All-in-one features pack" 
          description="Streamline your marketing efforts with our comprehensive guides designed for small businesses."
      />
    </>
  )
}

export default page