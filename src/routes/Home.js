import React from 'react'
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import CenterSection from '../components/CenterSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <CenterSection />
    </div>
  )
}

export default Home;