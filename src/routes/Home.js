import React from 'react'
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import CenterSection from '../components/CenterSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <CenterSection />
      <FeaturedSection />
      <Footer />
    </div>
  )
}

export default Home;