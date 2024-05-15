"use client"
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
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
    });
  }, []);

  return (
    <>
      <Header/>
      <Hero/>
      <Growperfomance/>
      <Productvideo/>
      {/* <ReviewSlider/> */}
      <PricingPackages/>
      <Frequently/>
      <Blog/>
      <JournyInfo/>
      <Footer/>
    </>
  )
}